import data from '@/data/monthly_stats.json';

export async function getMonthlyStats(): Promise<ApiMonthlyStats> {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(data), 1000);
  });
}
