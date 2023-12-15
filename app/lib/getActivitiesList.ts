import data from '@/data/activities.json';

export async function getActivitiesList(): Promise<ApiActivitiesList> {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(data), 1000);
  });
}
