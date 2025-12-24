import { PigBreed, UserConditions } from '../types';

export const pigBreeds: PigBreed[] = [
  {
    id: 'mong_ca',
    name: 'Heo Móng Cá',
    nameVn: 'Heo Móng Cá (Heo Ốt)',
    image: 'https://images.unsplash.com/photo-1516467508483-a7212febe31a?w=400&h=300&fit=crop',
    heatTolerance: 3,
    diseaseResistance: 3,
    growthRate: 3,
    cost: 1,
    suitableFor: 'farm',
    fertility: 3,
    description: 'Heo Móng Cá là giống heo bản địa của Việt Nam, rất thích nghi với khí hậu nhiệt đới, chịu được thức ăn thô, ít bệnh, chất lượng thịt thơm ngon, đặc sản.',
    heatToleranceText: 'Chịu nóng rất tốt',
    diseaseResistanceText: 'Kháng bệnh rất cao',
    growthRateText: 'Chậm nhưng chắc',
    costText: 'Chi phí thấp',
    suitableForText: 'Phù hợp mọi điều kiện',
    fertilityText: 'Đẻ nhiều, chăm con tốt'
  },
  {
    id: 'landrace',
    name: 'Heo Landrace (Lai)',
    nameVn: 'Heo Landrace',
    image: 'https://images.unsplash.com/photo-1528460148246-6af3549f8518?w=400&h=300&fit=crop',
    heatTolerance: 2,
    diseaseResistance: 2,
    growthRate: 1,
    cost: 2,
    suitableFor: 'farm',
    fertility: 3,
    description: 'Heo Landrace cho năng suất thịt cao, đẻ nhiều con, thích hợp nuôi thương phẩm, cần chuồng trại mát mẻ và thức ăn chất lượng.',
    heatToleranceText: 'Chịu nóng khá tốt',
    diseaseResistanceText: 'Kháng bệnh trung bình',
    growthRateText: 'Phát triển nhanh',
    costText: 'Chi phí trung bình',
    suitableForText: 'Phù hợp trang trại',
    fertilityText: 'Đẻ nhiều (10-12 con)'
  },
  {
    id: 'yorkshire',
    name: 'Heo Yorkshire',
    nameVn: 'Heo Yorkshire (White)',
    image: 'https://images.unsplash.com/photo-1596825338461-8d2b5f7eb1b9?w=400&h=300&fit=crop',
    heatTolerance: 1,
    diseaseResistance: 2,
    growthRate: 1,
    cost: 3,
    suitableFor: 'farm',
    fertility: 3,
    description: 'Heo Yorkshire trắng đẹp, nuôi thịt cho năng suất cao, cần chăm sóc kỹ, chuồng trại thoáng mát, thích hợp chăn nuôi công nghiệp.',
    heatToleranceText: 'Chịu nóng kém',
    diseaseResistanceText: 'Kháng bệnh trung bình',
    growthRateText: 'Phát triển rất nhanh',
    costText: 'Chi phí cao',
    suitableForText: 'Phù hợp trang trại lớn',
    fertilityText: 'Đẻ nhiều, mẹ khéo'
  },
  {
    id: 'duroc',
    name: 'Heo Duroc',
    nameVn: 'Heo Duroc (Đỏ)',
    image: 'https://images.unsplash.com/photo-1554866585-cd94860890b7?w=400&h=300&fit=crop',
    heatTolerance: 2,
    diseaseResistance: 2,
    growthRate: 1,
    cost: 2,
    suitableFor: 'medium',
    fertility: 2,
    description: 'Heo Duroc màu đỏ nâu, thịt săn chắc, chất lượng cao, chịu được điều kiện nuôi tốt hơn các giống trắng, thích hợp lai tạo.',
    heatToleranceText: 'Chịu nóng khá tốt',
    diseaseResistanceText: 'Kháng bệnh trung bình',
    growthRateText: 'Phát triển rất nhanh',
    costText: 'Chi phí trung bình',
    suitableForText: 'Phù hợp hộ nuôi vừa',
    fertilityText: 'Trung bình (8-10 con)'
  },
  {
    id: 'lai_f1',
    name: 'Heo Lai F1',
    nameVn: 'Heo Lai F1 (Lai 3 dòng)',
    image: 'https://images.unsplash.com/photo-1574271887954-9ea6e35d46d2?w=400&h=300&fit=crop',
    heatTolerance: 2,
    diseaseResistance: 3,
    growthRate: 1,
    cost: 2,
    suitableFor: 'farm',
    fertility: 3,
    description: 'Heo lai F1 là giống heo thương mại phổ biến nhất, kết hợp ưu điểm của cả 3 giống: phát triển nhanh, ít bệnh, đẻ nhiều, hiệu quả kinh tế cao.',
    heatToleranceText: 'Chịu nóng khá tốt',
    diseaseResistanceText: 'Kháng bệnh cao',
    growthRateText: 'Phát triển rất nhanh',
    costText: 'Chi phí trung bình',
    suitableForText: 'Phù hợp mọi quy mô',
    fertilityText: 'Đẻ rất nhiều (12+ con)'
  },
  {
    id: 'mong_ca_lai',
    name: 'Heo Móng Cá Lai',
    nameVn: 'Heo Móng Cá Lai',
    image: 'https://images.unsplash.com/photo-1463936575829-25148e1db1b8?w=400&h=300&fit=crop',
    heatTolerance: 3,
    diseaseResistance: 3,
    growthRate: 2,
    cost: 1,
    suitableFor: 'family',
    fertility: 3,
    description: 'Heo Móng Cá lai với giống ngoại: vừa giữ được khả năng thích nghi của heo bản địa, vừa phát triển nhanh hơn. Phù hợp hộ gia đình ít vốn.',
    heatToleranceText: 'Chịu nóng rất tốt',
    diseaseResistanceText: 'Kháng bệnh rất cao',
    growthRateText: 'Phát triển khá nhanh',
    costText: 'Chi phí thấp',
    suitableForText: 'Phù hợp hộ gia đình nhỏ',
    fertilityText: 'Đẻ nhiều, mẹ khéo'
  },
  {
    id: 'pietran',
    name: 'Heo Pietrain',
    nameVn: 'Heo Pietrain',
    image: 'https://images.unsplash.com/photo-1560446872-b836677a2319?w=400&h=300&fit=crop',
    heatTolerance: 1,
    diseaseResistance: 1,
    growthRate: 1,
    cost: 3,
    suitableFor: 'breeder',
    fertility: 2,
    description: 'Heo Pietrain có tỷ lệ thịt cao nhất (trên 65%), thân mình đốm đen trắng, thường dùng làm heo đực giống để lai tạo.',
    heatToleranceText: 'Chịu nóng kém',
    diseaseResistanceText: 'Kháng bệnh thấp',
    growthRateText: 'Phát triển rất nhanh',
    costText: 'Chi phí cao',
    suitableForText: 'Trung tâm nhân giống',
    fertilityText: 'Trung bình'
  },
  {
    id: 'heo_vang',
    name: 'Heo Vàng (Bến Tre)',
    nameVn: 'Heo Vàng Miền Tây',
    image: 'https://images.unsplash.com/photo-1554355811-33d4be5b6034?w=400&h=300&fit=crop',
    heatTolerance: 3,
    diseaseResistance: 3,
    growthRate: 3,
    cost: 1,
    suitableFor: 'medium',
    fertility: 3,
    description: 'Heo Vàng đặc sản miền Tây, thịt rất ngon, thích nghi tốt với điều kiện nóng ẩm, ít bệnh, dễ nuôi, phù hợp nuôi lấy thịt đặc sản.',
    heatToleranceText: 'Chịu nóng rất tốt',
    diseaseResistanceText: 'Kháng bệnh rất cao',
    growthRateText: 'Chậm nhưng thịt ngon',
    costText: 'Chi phí thấp',
    suitableForText: 'Phù hợp miền Tây Nam Bộ',
    fertilityText: 'Đẻ nhiều, mẹ khéo'
  }
];

export function calculateCompatibility(conditions: UserConditions): { breed: PigBreed; score: number }[] {
  const results = pigBreeds.map(breed => {
    let score = 50; // Base score

    // Heat tolerance scoring (climate preference)
    if (conditions.climate === 'hot') {
      if (breed.heatTolerance === 3) score += 25;
      else if (breed.heatTolerance === 2) score += 15;
      else score -= 5;
    } else if (conditions.climate === 'cold') {
      if (breed.heatTolerance === 1) score += 15;
    } else if (conditions.climate === 'temperate') {
      score += 5; // All breeds okay with temperate
    }

    // Facility matching
    if (breed.suitableFor === conditions.facility) {
      score += 20;
    } else if (
      (breed.suitableFor === 'medium' && (conditions.facility === 'family' || conditions.facility === 'farm')) ||
      (breed.suitableFor === 'farm' && conditions.facility === 'medium') ||
      (breed.suitableFor === 'family' && conditions.facility === 'medium')
    ) {
      score += 10;
    }

    // Budget preference (inverse - lower cost preferred for low budget)
    if (conditions.budget === 'low') {
      if (breed.cost === 1) score += 20;
      else if (breed.cost === 2) score += 5;
      else score -= 10;
    } else if (conditions.budget === 'high') {
      if (breed.cost === 3) score += 10;
      else if (breed.cost === 2) score += 5;
    }

    // Priority weighting
    if (conditions.priority === 'easy') {
      score += breed.diseaseResistance * 8;
      score += breed.heatTolerance * 5;
    } else if (conditions.priority === 'fast') {
      score += (4 - breed.growthRate) * 12;
    } else if (conditions.priority === 'longterm') {
      score += breed.suitableFor === 'breeder' || breed.suitableFor === 'farm' ? 15 : 5;
      score += breed.fertility * 3; // Fertility important for long term breeding
    }

    // Ensure score is between 0 and 100
    score = Math.max(0, Math.min(100, score));

    return { breed, score };
  });

  // Sort by score descending
  return results.sort((a, b) => b.score - a.score).slice(0, 3);
}
