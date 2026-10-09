export const getUnitBn = (unit: string) => {
     const units: Record<string, string> = {
          kg: 'কেজি',
          litre: 'লিটার',
          dozen: 'ডজন',
          piece: 'পিস',
     };

     return units[unit] || unit;
};
