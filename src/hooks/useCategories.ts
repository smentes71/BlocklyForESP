import { useState, useCallback } from 'react';
import { Category, CategoryFormData, Sensor } from '../types/category';

export const useCategories = () => {
  const [categories, setCategories] = useState<Category[]>([
    {
      id: '1',
      name: '⚡ Analog / Dijital Kontrol Sensörleri',
      icon: 'zap',
      description: 'Analog ve dijital kontrol sensörleri kategorisi. Sıcaklık, basınç, nem ve diğer fiziksel parametreleri ölçen sensörler.',
      itemCount: 24,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: '2',
      name: 'Mesafe Yakınlık Sensörleri',
      icon: 'radar',
      description: 'Mesafe ve yakınlık algılama sensörleri. Analog ve dijital çıkışlı sensörler ile konum belirleme.',
      itemCount: 4,
      sensors: [
        {
          id: 's1',
          name: 'Potansiyometre',
          description: 'Analog giriş eğitimi'
        },
        {
          id: 's2',
          name: 'Joystick',
          description: 'X-Y analog kontrol'
        },
        {
          id: 's3',
          name: 'Hall Effect Sensörü',
          description: 'Manyetik alan algılama'
        },
        {
          id: 's4',
          name: 'Reed Switch',
          description: 'Manyetik kapı sensörü'
        }
      ],
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ]);

  const addCategory = useCallback((data: CategoryFormData) => {
    const newCategory: Category = {
      id: Date.now().toString(),
      name: data.name,
      icon: data.icon,
      description: data.description,
      itemCount: 0,
      createdAt: new Date(),
      updatedAt: new Date()
    };
    setCategories(prev => [...prev, newCategory]);
  }, []);

  const updateCategory = useCallback((id: string, data: CategoryFormData) => {
    setCategories(prev => prev.map(category => 
      category.id === id 
        ? { ...category, ...data, updatedAt: new Date() }
        : category
    ));
  }, []);

  const deleteCategory = useCallback((id: string) => {
    setCategories(prev => prev.filter(category => category.id !== id));
  }, []);

  return {
    categories,
    addCategory,
    updateCategory,
    deleteCategory
  };
};