export default function ({ route, $storage }) {
  return $storage.setUniversal('currentUrl', route.path)
}
