FROM python:3.10-slim

WORKDIR /app

# 필요한 패키지 설치
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# 소스 코드 복사
COPY . .

# Cloud Run 배포를 위한 설정
CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000"]
