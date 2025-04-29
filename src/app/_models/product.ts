import { Category } from "./category";

export class Product{
  id;
  productName;
  imageUrl;
  description;
  categoryId;
  category:Category;
}
