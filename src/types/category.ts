export interface Category {
  id: string;
  name: string;
  icon: string;
  description: string;
  itemCount: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface CategoryFormData {
  name: string;
  description: string;
  icon: string;
}