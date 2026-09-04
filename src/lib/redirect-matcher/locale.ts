/**
 * The two site languages, redeclared for this directory.
 *
 * The core cannot import from '@/lib/i18n': the test config empties `paths`, so
 * an alias import would fail to compile there. A local type alias is cheaper
 * than a relative reach up into the app's own module graph, and the UI layer
 * maps between the two at its boundary.
 */
export type Language = 'tr' | 'en';
