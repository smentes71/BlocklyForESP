export interface Category {
  id: string;
  name: string;
  icon: string;
  description: string;
  itemCount: number;
  sensors?: Sensor[];
  createdAt: Date;
  updatedAt: Date;
}

export interface Sensor {
  id: string;
  name: string;
  description: string;
}

export interface CategoryFormData {
  name: string;
  description: string;
  icon: string;
}