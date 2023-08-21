interface DatPluginType {
  mount: (elementId: string) => void;
  unmount: (elementId: string) => void;
}

interface Window {
  DatPlugin: DatPluginType;
}
