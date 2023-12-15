import data from '@/data/monthly_stats.json';

export async function getStatsByMonth(
  monthId: number
): Promise<MonthlyStats | undefined> {
  return new Promise((resolve, reject) => {
    const response = data.data.find((month) => month.month_id === monthId);
    setTimeout(() => resolve(response), 1000);
  });
}
