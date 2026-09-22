import type { LucideProps } from "lucide-react";
import {
  BedDouble,
  CarFront,
  Headphones,
  Landmark,
  Map,
  MapPin,
  MountainSnow,
  NotebookPen,
  Palmtree,
  ReceiptText,
  Route,
  Snowflake,
  Trees,
  UsersRound,
  Waves,
} from "lucide-react";

export type HomeIconName =
  | "car"
  | "headphones"
  | "hotel"
  | "landmark"
  | "map"
  | "mapPin"
  | "mountain"
  | "notebook"
  | "palmtree"
  | "receipt"
  | "route"
  | "snowflake"
  | "trees"
  | "users"
  | "waves";

const homeIcons = {
  car: CarFront,
  headphones: Headphones,
  hotel: BedDouble,
  landmark: Landmark,
  map: Map,
  mapPin: MapPin,
  mountain: MountainSnow,
  notebook: NotebookPen,
  palmtree: Palmtree,
  receipt: ReceiptText,
  route: Route,
  snowflake: Snowflake,
  trees: Trees,
  users: UsersRound,
  waves: Waves,
} satisfies Record<HomeIconName, React.ComponentType<LucideProps>>;

type HomeIconProps = LucideProps & {
  name: HomeIconName;
};

function HomeIcon({ name, ...props }: HomeIconProps) {
  const Icon = homeIcons[name];

  return <Icon {...props} />;
}

export { HomeIcon };
