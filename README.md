# TaskAI - AI 업무 우선순위 관리 시스템

대학교 학과조교를 위한 AI 기반 업무 관리 웹 애플리케이션입니다.
협조문 이미지를 업로드하면 AI가 자동으로 업무 정보를 추출하고, 효율적인 처리 순서를 추천해줍니다.

---

## 주요 기능

### 1. 업무 관리 (CRUD)

- 업무 추가: 제목, 마감일, 예상 소요시간, 난이도, 유형, 중요도 입력
- 업무 목록 조회 및 완료 처리
- 업무 삭제

### 2. 협조문 AI 분석

- 협조문 이미지(JPG, PNG) 업로드 시 GPT-4o-mini가 자동 분석
- 여러 장의 이미지를 하나의 협조문으로 합쳐서 분석 가능 (최대 10개)
- 추출 정보: 업무 제목, 마감일, 마감 시간, 중요도, 난이도, 예상 소요시간, 업무 유형

### 3. AI 우선순위 추천

- 등록된 업무 목록을 GPT-4o-mini에 전달하여 처리 순서 추천
- 추천 기준: 중요도 > 마감일 > 소요시간 > 난이도 > 업무 유형

### 4. 오늘의 추천 업무 TOP 3

- 마감일과 중요도를 기반으로 오늘 처리해야 할 업무 자동 선정

---

## 기술 스택

| 구분        | 기술                                      |
| ----------- | ----------------------------------------- |
| Frontend    | Vue 3, Vuetify 3, Vue Router, Vuex, Axios |
| Backend     | Node.js, Express.js                       |
| AI          | OpenAI API (GPT-4o-mini)                  |
| 파일 업로드 | Multer                                    |

---

## 프로젝트 구조

```
TaskAI/
├── backend/               # Express.js 서버
│   ├── routes/
│   │   └── task.js        # 업무 API 및 AI 분석 로직
│   ├── uploads/           # 업로드된 이미지 임시 저장 (분석 후 자동 삭제)
│   └── app.js             # Express 앱 설정
└── front/                 # Vue 3 클라이언트
    └── src/
        ├── views/
        │   └── TaskView.vue   # 메인 업무 관리 화면
        └── components/
```

---

## 시작하기

### 사전 요구사항

- Node.js 16 이상
- OpenAI API Key

### 1. 저장소 클론

```bash
git clone https://github.com/olleh99/TaskAI.git
cd TaskAI
```

### 2. 백엔드 설정

```bash
cd backend
npm install
```

OpenAI API Key를 환경 변수로 설정합니다.

```bash
# Linux / macOS
export OPENAI_API_KEY=your_api_key_here

# Windows (PowerShell)
$env:OPENAI_API_KEY="your_api_key_here"

# Windows (cmd)
set OPENAI_API_KEY=your_api_key_here
```

백엔드 서버 실행:

```bash
npm start
# http://localhost:3000 에서 실행됩니다
```

### 3. 프론트엔드 설정

```bash
cd ../front
npm install
npm run serve
# http://localhost:8080 에서 실행됩니다
```

### 4. 브라우저에서 열기

```
http://localhost:8080
```

---

## API 엔드포인트

| 메서드 | 경로                           | 설명                  |
| ------ | ------------------------------ | --------------------- |
| GET    | `/api/tasks`                   | 전체 업무 조회        |
| POST   | `/api/tasks`                   | 업무 추가             |
| PATCH  | `/api/tasks/:id/complete`      | 업무 완료 처리        |
| DELETE | `/api/tasks/:id`               | 업무 삭제             |
| POST   | `/api/tasks/analyze-documents` | 협조문 이미지 AI 분석 |
| POST   | `/api/tasks/ai-priority`       | AI 우선순위 추천      |

---

## 주의사항

- 업무 데이터는 서버 메모리에 저장되므로 **서버 재시작 시 초기화**됩니다.
- 협조문 이미지는 분석 완료 후 서버에서 **자동으로 삭제**됩니다.
- OpenAI API 사용 비용이 발생할 수 있습니다.
