def calculate_index(traffic: int, match_rate: float, density: float) -> dict:
    """
    (가설) OOH 효과성 지수 산출 알고리즘
    """
    score = (traffic * 0.4) + (match_rate * 100 * 20) + (density * 150)
    capped_score = min(score, 1000.0) # 최대 점수 1000점 제한
    
    return {
        "calculated_score": capped_score,
        "parameters_used": {
            "traffic": traffic,
            "match_rate": match_rate,
            "density": density
        }
    }
