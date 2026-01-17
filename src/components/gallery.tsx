import {
  Card,
  CardContent,
  CardHeader,
  CardDescription,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";

import Image from "next/image";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

type GalleryItem = {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  tags?: Tag[];
};

enum Tag {
  Nature = "Nature",
  Urban = "Urban",
  Sunset = "Sunset",
  Night = "Night",
  Forest = "Forest",
  Ocean = "Ocean",
  Waves = "Waves",
}

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    title: "Sunset Over the Mountains",
    description: "A beautiful sunset over the mountains.",
    imageUrl: "/test.jpg",
    tags: [Tag.Nature, Tag.Sunset],
  },
  {
    id: 2,
    title: "City Skyline",
    description: "The city skyline at night with all its lights.",
    imageUrl: "/test2.jpg",
    tags: [Tag.Urban, Tag.Night],
  },
  {
    id: 3,
    title: "Forest Pathway",
    description: "A serene pathway through the forest.",
    imageUrl: "/test2.jpg",
    tags: [Tag.Nature, Tag.Forest],
  },
  {
    id: 4,
    title: "Ocean Waves",
    description: "Waves crashing onto the shore.",
    imageUrl: "/test.jpg",
    tags: [Tag.Ocean, Tag.Waves],
  },
];

export default function Gallery() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {galleryItems.map((item) => (
        <Card key={item.id} className="max-w-md pt-0 overflow-hidden">
          <CardContent className="px-0">
            <Image
              src={item.imageUrl}
              alt="Card Image"
              width={400}
              height={200}
              className="aspect-video object-cover"
            />
          </CardContent>
          <CardHeader>
            <CardTitle className="font-light">{item.title}</CardTitle>
            <CardDescription className="font-light">
              {item.description}
            </CardDescription>
          </CardHeader>
          <CardFooter className="gap-3 items-stretch">
            {item.tags?.map((tag) => (
              <Badge
                key={item.id + "-" + tag}
                variant="outline"
                className="font-light"
              >
                {tag}
              </Badge>
            ))}
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
