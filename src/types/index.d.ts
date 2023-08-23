interface PluginOptions {
  initializedOptions: string[];
}

interface DatPluginType {
  selector: string;
  options: PluginOptions;
}

interface Window {
  DatPlugin: DatPluginType;
}
