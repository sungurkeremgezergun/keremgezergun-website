import type { Language } from '@/lib/i18n';
import { industryEvents } from '@/lib/projects';
import { PERSON_ID, graph, ref, type SchemaNode } from './base';
import { breadcrumbNode, itemListNode, webPageNode } from './page';
import { PODCAST_ID, podcastNode } from './home';

/**
 * The industry-projects page: past talks and summits as Event nodes, with the
 * podcast referenced rather than re-described.
 */

const copy = {
  name: { tr: 'Sektörel Projeler', en: 'Industry Projects' },
  description: {
    tr: 'Üniversite zirveleri, dernek etkinlikleri, ücretsiz e-ticaret eğitimleri ve Sepetteki SEO podcast’i dahil, SEO ve dijital pazarlama alanındaki konuşmacılık ve proje çalışmaları.',
    en: 'Speaking and project work in SEO and digital marketing, including university summits, association events, free e-commerce training and the Sepetteki SEO podcast.',
  },
  listName: { tr: 'Konuşmacılık ve etkinlikler', en: 'Talks and events' },
} as const;

export const projectsUrl = (language: Language) =>
  language === 'en'
    ? 'https://www.keremgezergun.com/en/industry-projects'
    : 'https://www.keremgezergun.com/sektorel-projeler';

export function eventNodes(language: Language): SchemaNode[] {
  return industryEvents.map((event) => ({
    '@type': event.type,
    '@id': `${projectsUrl(language)}#${event.slug}`,
    name: event.name[language],
    description: event.description[language],
    startDate: event.startDate,
    ...(event.endDate ? { endDate: event.endDate } : {}),
    eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
    eventStatus: 'https://schema.org/EventScheduled',
    performer: ref(PERSON_ID),
    ...(event.organizer
      ? { organizer: { '@type': 'Organization', name: event.organizer[language] } }
      : {}),
    location: {
      '@type': 'Place',
      name: event.locationName[language],
      address: {
        '@type': 'PostalAddress',
        addressLocality: event.addressLocality[language],
        addressCountry: 'TR',
      },
    },
    ...(event.maximumAttendeeCapacity
      ? { maximumAttendeeCapacity: event.maximumAttendeeCapacity }
      : {}),
  }));
}

export function projectsGraph(language: Language): SchemaNode {
  const url = projectsUrl(language);
  const events = eventNodes(language);
  const page = webPageNode({
    url,
    language,
    type: 'CollectionPage',
    name: copy.name[language],
    description: copy.description[language],
    extra: {
      about: ref(PERSON_ID),
      mainEntity: { '@id': `${url}#events` },
      // The podcast is a series, not an event, so it sits beside the event
      // list rather than inside it. The node itself is carried below so the
      // reference resolves within this document.
      mentions: ref(PODCAST_ID),
    },
  });
  const list = itemListNode({
    id: `${url}#events`,
    name: copy.listName[language],
    items: events.map((event) => ({
      name: event.name as string,
      item: { '@id': event['@id'] as string },
    })),
  });
  return graph(
    page,
    list,
    ...events,
    podcastNode(language),
    breadcrumbNode(language, { name: copy.name[language], url }),
  );
}
