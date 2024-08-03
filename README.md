# Caption-Aid

Caption-Aid는 Gemini Pro 1.5 모델의 멀티모달 기능을 활용한 지능형 이미지 캡셔닝 도구입니다. 이 서비스는 사용자가 이미지를 업로드하거나 붙여넣으면 자동으로 캡션을 생성해줍니다.

## 주요 기능

- 이미지 업로드 기능
- 클립보드에서 이미지 붙여넣기 지원
- Gemini Pro 1.5를 이용한 자동 캡션 생성
- 생성된 캡션에 대한 텍스트 음성 변환 기능

## 사전 준비 사항

- 로컬 머신에 Node.js 설치
- Gemini API 키 (Gemini Pro 1.5 모델 접근용)

## 설치 방법

1. 리포지토리를 로컬 머신에 클론합니다:
   ```
   git clone https://github.com/elymas/caption-aid.git
   cd caption-aid
   ```

2. 백엔드와 프론트엔드의 의존성을 설치합니다:
   ```
   cd backend
   npm install
   cd ../frontend
   npm install
   ```

3. 환경 변수를 설정합니다:
   - `backend` 폴더로 이동합니다
   - `.env_sample` 파일 이름을 `.env`로 변경합니다
   - `.env` 파일을 열어 Gemini API 키를 추가합니다:
     ```
     API_KEY=your_api_key_here
     ```

## 애플리케이션 실행

Caption-Aid를 실행하려면 백엔드 서버와 프론트엔드 애플리케이션을 모두 시작해야 합니다.

1. 백엔드 서버를 시작합니다:
   ```
   cd backend
   node server.js
   ```

2. 새로운 터미널 창을 열고 프론트엔드 애플리케이션을 시작합니다:
   ```
   cd frontend
   npx http-server ./
   ```

3. 웹 브라우저를 열고 `http://localhost:8080` (또는 http-server가 제공하는 주소)로 이동합니다.

## 사용 방법

1. 애플리케이션이 실행되면 "Upload Image" 버튼을 사용하여 이미지를 업로드하거나 지정된 영역에 이미지를 직접 붙여넣을 수 있습니다.
2. 이미지가 로드되면 "Submit" 버튼을 클릭하여 캡션을 생성합니다.
3. 생성된 캡션은 오른쪽 패널에 표시됩니다.
4. "Hear Caption" 버튼을 사용하여 생성된 캡션을 텍스트 음성 변환 기능으로 들을 수 있습니다.

## 문제 해결

- 캡션 생성에 문제가 있는 경우 `.env` 파일에 Gemini API 키가 올바르게 설정되었는지 확인하세요.
- 백엔드 서버와 프론트엔드 애플리케이션이 동시에 실행 중인지 확인하세요.

## 연락처

질문이나 피드백이 있으면 [elymas@gmail.com]으로 연락해 주세요.