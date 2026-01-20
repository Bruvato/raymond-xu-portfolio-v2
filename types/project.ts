export type Media = {
  type: "image" | "video";
  src: string;
  alt?: string;
};

export type Link = {
  label?: string;
  url: string;
  icon?: string;
};

export type Project = {
  id: string;
  title: string;
  description: string;
  tags?: string[];
  media?: Media[];
  links?: Link[];
  date: string;
};
