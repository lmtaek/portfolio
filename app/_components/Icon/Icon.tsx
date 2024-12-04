import Cycle from "@/app/_components/Icon/icons/Cycle";
import Download from "@/app/_components/Icon/icons/Download";
import Hamburger from "@/app/_components/Icon/icons/Hamburger";
import JSON from "@/app/_components/Icon/icons/JSON";
import Library from "@/app/_components/Icon/icons/Library";
import Tools from "@/app/_components/Icon/icons/Tools";

export interface Icon {
  type: IconTypes;
  className?: string;
}

export enum IconTypes {
  HAMBURGER = "hamburger",
  DOWNLOAD = "download",
  JSON = "json",
  LIBRARY = "library",
  TOOLS = "tools",
  CYCLE = "cycle",
}

export default function Icon({ type }: Icon) {
  if (!type) return <></>;

  switch (type) {
    case IconTypes.HAMBURGER: {
      return <Hamburger />;
    }
    case IconTypes.DOWNLOAD: {
      return <Download />;
    }
    case IconTypes.JSON: {
      return <JSON />;
    }
    case IconTypes.CYCLE: {
      return <Cycle />;
    }
    case IconTypes.LIBRARY: {
      return <Library />;
    }
    case IconTypes.TOOLS: {
      return <Tools />;
    }
    default: {
      return <></>;
    }
  }
}
