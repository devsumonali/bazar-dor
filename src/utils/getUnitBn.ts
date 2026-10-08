export const getUnitBn = (unit: string) => {
     const units: Record<string, string> = {
          kg: 'কেজি',
          liter: 'লিটার',
          dozen: 'ডজন',
          piece: 'পিস',
     };

     return units[unit] || unit;
};
