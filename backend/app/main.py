from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.api import routes

app = FastAPI(title="Portfolio Backend API", version="1.0.0")

# CORS 설정 (프론트엔드 통신 허용)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], # 배포 시 Vercel 도메인으로 변경 필요
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(routes.router, prefix="/api")

@app.get("/")
def read_root():
    return {"message": "Welcome to the Portfolio API Backend"}
