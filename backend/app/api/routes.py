from fastapi import APIRouter
from app.services.index_engine import calculate_index

router = APIRouter()

@router.get("/calculate-ooh-index")
def get_ooh_index(traffic: int = 1000, match_rate: float = 0.5, density: float = 1.5):
    """
    OOH 광고 효과성 지수를 계산하여 반환합니다.
    """
    result = calculate_index(traffic, match_rate, density)
    return {"status": "success", "data": result}
