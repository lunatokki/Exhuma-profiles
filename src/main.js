import exImage1 from './images/image1.png'
import exImage2 from './images/image2.png'
import exImage3 from './images/image3.png'
import exImage4 from './images/image4.png'
import exImage5 from './images/image5.png'
import exImage6 from './images/image6.png'
import exImage7 from './images/image7.png'
import exImage8 from './images/image8.png'
import exImage9 from './images/image9.png'

document.addEventListener('DOMContentLoaded', function () {
  const profilesContainer = document.querySelector('.profiles');
  const loadMoreBtn = document.querySelector('.load-more-btn');
  const searchInput = document.querySelector('input[type="text"]');
  
  const profiles = [
      { name: '이화림', position: '무당', image: exImage1 },
      { name: '김상덕', position: '풍수사', image: exImage2 },
      { name: '윤봉길', position: '박수', image: exImage3 },
      { name: '고영근', position: '장의사', image: exImage4 },
      { name: '오광심', position: '무당', image: exImage5 },
      { name: '박자혜', position: '무당', image: exImage6 },
      { name: '화림할머니', position: '무당', image: exImage7 },
      { name: '보살님', position: '보살', image: exImage8 },
      { name: '장재현', position: '영화감독', image: exImage9 }
  ];
  
  let visibleProfiles = 5; // 처음 로딩시 보여줄 프로필 수
  const profilesPerPage = 5; // 더보기 버튼 클릭시 추가될 프로필 수
  
  // 초기 로딩시 프로필 렌더링
  renderProfiles(profiles.slice(0, visibleProfiles));
  
  // Load More 버튼 클릭 이벤트
  loadMoreBtn.addEventListener('click', function () {
    visibleProfiles += profilesPerPage;
    renderProfiles(profiles.slice(0, visibleProfiles));
  });
  
  // 프로필 목록 렌더링 함수
  function renderProfiles(profilesArray) {
      profilesContainer.innerHTML = '';
      profilesArray.forEach(profile => {
        const profileDiv = document.createElement('div');
        profileDiv.classList.add('profile');
        profileDiv.innerHTML = `
          <img src="${profile.image}" alt="${profile.name}">
          <h3>${profile.name}</h3>
          <p>${profile.position}</p>
        `;
        profilesContainer.appendChild(profileDiv);
      });
  }
  
  // 이름 검색 이벤트
  searchInput.addEventListener('input', function () {
    const searchTerm = searchInput.value.toLowerCase();
    const filteredProfiles = profiles.filter(profile =>
      profile.name.toLowerCase().includes(searchTerm)
    );
    renderProfiles(filteredProfiles.slice(0, visibleProfiles));
  });
});
