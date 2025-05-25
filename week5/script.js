// script.js

// 필요한 HTML 요소 가져오기
const callButton = document.getElementById('call');
const rootDiv = document.getElementById('root');

// TODO LIST 불러오기 버튼 클릭 이벤트 리스너
callButton.addEventListener('click', () => {
  // 기존 목록 초기화 (버튼 여러 번 누를 경우 중복 방지)
  rootDiv.innerHTML = '불러오는 중...'; 
  
  // API로부터 TODO LIST 데이터 불러오기
  fetch('https://jsonplaceholder.typicode.com/todos') // 예시 API: JSONPlaceholder에서 TODOs 데이터 제공
    .then(response => {
      // HTTP 응답이 성공적(200 OK)인지 확인
      if (!response.ok) {
        throw new Error(`HTTP 오류! 상태: ${response.status}`);
      }
      return response.json(); // JSON 형태로 파싱
    })
    .then(todos => {
      // rootDiv 초기화
      rootDiv.innerHTML = ''; 

      // 데이터 중 일부만 사용 (예시를 위해 처음 10개만)
      const limitedTodos = todos.slice(0, 10);

      // 각 TODO 아이템을 HTML로 렌더링
      limitedTodos.forEach(todo => {
        const todoItem = document.createElement('p'); // <p> 태그 생성
        todoItem.classList.add('todo-item'); // 기본 스타일을 위한 클래스 추가

        todoItem.textContent = todo.title; // TODO 제목 설정

        // todo.completed가 true인 경우 'completed' 클래스 추가
        if (todo.completed) {
          todoItem.classList.add('completed'); // CSS에서 정의한 'completed' 클래스 추가
        }

        rootDiv.appendChild(todoItem); 
      });
    })
    .catch(error => {
      console.error('TODO 목록을 불러오는 중 오류 발생:', error);
      rootDiv.innerHTML = `<p style="color: red;">데이터를 불러오는 중 오류가 발생했습니다: ${error.message}</p>`;
    });
});