import './style.css';

const KAKAO_APP_KEY = 'c0d1fb36e2297d781735365776377da0';

const initKakao = () => {
  if (window.Kakao && !window.Kakao.isInitialized()) {
    window.Kakao.init(KAKAO_APP_KEY);
  }
};

const shareOnKakao = (title, description) => {
  if (!window.Kakao) {
    window.alert('카카오 SDK가 아직 로드되지 않았습니다.');
    return;
  }
  initKakao();
  if (!window.Kakao.Share) {
    window.alert('카카오 공유 기능을 사용할 수 없습니다.');
    return;
  }

  const shareUrl = window.location.href.split('#')[0];
  const imageUrl = `${window.location.origin}/og-cover.svg`;

  window.Kakao.Share.sendDefault({
    objectType: 'feed',
    content: {
      title,
      description,
      imageUrl,
      link: {
        mobileWebUrl: shareUrl,
        webUrl: shareUrl
      }
    },
    buttons: [
      {
        title: '테스트 보기',
        link: {
          mobileWebUrl: shareUrl,
          webUrl: shareUrl
        }
      }
    ]
  });
};

const profiles = {
  mbti: [
    {
      max: 12,
      title: '안정-지원형',
      summary: '체계적인 환경에서 꾸준히 성과를 내는 타입입니다.',
      tips: ['명확한 목표와 체크리스트를 활용하세요.', '운영·관리·품질 개선 업무에 강점이 있습니다.', '성과 기록을 정기적으로 리뷰하세요.']
    },
    {
      max: 20,
      title: '균형-탐색형',
      summary: '구조와 창의성 사이의 균형을 잘 맞추는 타입입니다.',
      tips: ['문제 해결과 아이디어 제안을 동시에 수행하세요.', '프로젝트 리딩 또는 PM 업무를 고려해보세요.', '협업 커뮤니케이션 루틴을 만들어보세요.']
    },
    {
      max: 30,
      title: '도전-개척형',
      summary: '새로운 과제를 즐기고 변화를 주도하는 타입입니다.',
      tips: ['신사업, 스타트업, 전략 기획에 잘 맞습니다.', '실험과 검증을 빠르게 반복하세요.', '리스크 관리 기준을 함께 세워주세요.']
    }
  ],
  love: [
    {
      max: 12,
      title: '차분-자율형',
      summary: '관계 안에서도 개인의 시간을 중요하게 생각합니다.',
      tips: ['경계와 기대치를 명확히 공유하세요.', '감정을 글이나 메모로 정리해보세요.', '과한 연락 빈도에 스트레스가 없는지 점검하세요.']
    },
    {
      max: 20,
      title: '균형-소통형',
      summary: '대화와 존중 사이의 균형을 잘 맞추는 타입입니다.',
      tips: ['갈등이 생기면 즉시 대화를 시도하세요.', '상대가 원하는 사랑의 언어를 확인하세요.', '정기적인 데이트 루틴을 만들어보세요.']
    },
    {
      max: 30,
      title: '감정-몰입형',
      summary: '감정 표현이 풍부하고 관계에 깊이 몰입하는 타입입니다.',
      tips: ['불안할 때는 사실과 감정을 분리해서 표현하세요.', '혼자만의 회복 루틴을 확보하세요.', '상대의 속도를 존중하는 연습을 해보세요.']
    }
  ],
  stress: [
    {
      max: 12,
      title: '안정 관리형',
      summary: '스트레스 관리 루틴이 비교적 잘 유지되고 있습니다.',
      tips: ['현재 루틴을 유지하며 회복 시간을 확보하세요.', '업무 우선순위가 흔들리지 않도록 체크하세요.', '작은 성취를 기록해 동기부여를 유지하세요.']
    },
    {
      max: 20,
      title: '주의 관리형',
      summary: '피로가 누적되기 쉬운 구간입니다. 관리 루틴이 필요합니다.',
      tips: ['업무량을 가시화하고 조정해보세요.', '퇴근 후 디지털 디톡스 시간을 확보하세요.', '수면·식사·운동 루틴을 재정비하세요.']
    },
    {
      max: 30,
      title: '고위험 과부하형',
      summary: '지속적인 스트레스 신호가 강합니다. 회복이 우선입니다.',
      tips: ['업무 경계선을 명확히 설정하세요.', '주기적인 휴식과 상담을 고려하세요.', '업무 부담을 팀과 공유해 조정하세요.']
    }
  ],
  invest: [
    {
      max: 12,
      title: '보수-안정형',
      summary: '리스크를 줄이고 안정성을 중시하는 타입입니다.',
      tips: ['목표 기간과 손실 허용 범위를 명확히 하세요.', '분산 투자를 기본으로 가져가세요.', '장기 계획을 수치로 관리하세요.']
    },
    {
      max: 20,
      title: '균형-분산형',
      summary: '수익과 안정성을 균형 있게 고려하는 타입입니다.',
      tips: ['리스크 수준별 포트폴리오를 구성하세요.', '정기 리밸런싱 일정을 만들어보세요.', '감정적 매매를 줄이기 위해 기준을 문서화하세요.']
    },
    {
      max: 30,
      title: '공격-성장형',
      summary: '성장 가능성을 보고 적극적으로 도전하는 타입입니다.',
      tips: ['리스크 관리 규칙을 반드시 세우세요.', '정보 검증 시간을 확보하세요.', '수익 목표와 손절 기준을 명확히 하세요.']
    }
  ],
  travel: [
    {
      max: 12,
      title: '계획-정리형',
      summary: '철저한 계획과 안정적인 동선을 선호하는 타입입니다.',
      tips: ['일정표와 예산표를 미리 공유하세요.', '시간 여유를 포함한 플랜 B를 준비하세요.', '동행자와 기대치를 사전에 맞추세요.']
    },
    {
      max: 20,
      title: '유연-혼합형',
      summary: '계획과 즉흥 사이의 균형을 즐기는 타입입니다.',
      tips: ['핵심 일정만 고정하고 나머지는 유동적으로 두세요.', '여행 중 하루는 완전 자유 일정으로 비워보세요.', '동행자의 성향을 반영한 역할 분담이 좋습니다.']
    },
    {
      max: 30,
      title: '즉흥-탐험형',
      summary: '현장의 분위기와 새로운 경험을 중시하는 타입입니다.',
      tips: ['필수 일정만 잡고 나머지는 즉흥적으로 움직이세요.', '예산 안전 장치를 마련해두세요.', '리뷰와 안전 정보를 빠르게 확인하는 습관을 가지세요.']
    }
  ]
};

const forms = document.querySelectorAll('[data-test-form]');

const buildTraitBars = (score, maxScore) => {
  const ratio = score / maxScore;
  const left = Math.round((1 - ratio) * 100);
  const right = 100 - left;
  const mid = Math.round(((ratio * 0.6) + 0.2) * 100);

  const traits = [
    { leftLabel: '안정', rightLabel: '도전', leftValue: left, rightValue: right },
    { leftLabel: '신중', rightLabel: '즉흥', leftValue: 100 - mid, rightValue: mid },
    { leftLabel: '협업', rightLabel: '자율', leftValue: Math.max(25, left - 8), rightValue: Math.min(75, right + 8) }
  ];

  return traits
    .map(
      (trait) => `
      <div class="result-trait">
        <div class="trait-labels">
          <span>${trait.leftLabel}</span>
          <span>${trait.rightLabel}</span>
        </div>
        <div class="trait-bar">
          <span style="width: ${trait.rightValue}%"></span>
        </div>
        <div class="trait-values">
          <span>${trait.leftValue}%</span>
          <span>${trait.rightValue}%</span>
        </div>
      </div>
    `
    )
    .join('');
};

const renderResult = (profile, score, maxScore) => {
  const percent = Math.round((score / maxScore) * 100);
  const tips = profile.tips.map((tip) => `<li>${tip}</li>`).join('');

  return `
    <div class="result-card">
      <div class="result-badge">RESULT</div>
      <div class="result-title">${profile.title}</div>
      <p class="result-summary">${profile.summary}</p>
      <div class="result-score">${percent}%</div>
      <div class="result-bars">${buildTraitBars(score, maxScore)}</div>
      <div class="result-body">
        <h4>실천 팁</h4>
        <ul>${tips}</ul>
        <p class="notice">이 결과는 참고용이며 중요한 결정은 전문가와 상담하세요.</p>
      </div>
    </div>
  `;
};

forms.forEach((form) => {
  const key = form.getAttribute('data-test-form');
  const resultBox = form.querySelector('[data-result]');
  const totalQuestions = form.querySelectorAll('[data-question]').length;
  const questions = Array.from(form.querySelectorAll('[data-question]'));

  questions.forEach((question, index) => {
    const radios = question.querySelectorAll('input[type="radio"]');
    radios.forEach((radio) => {
      radio.addEventListener('change', () => {
        const next = questions[index + 1];
        if (next) {
          next.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      });
    });
  });

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const checked = form.querySelectorAll('input[type="radio"]:checked');

    if (checked.length < totalQuestions) {
      window.alert('모든 문항을 선택한 후 결과 보기를 눌러주세요.');
      resultBox.innerHTML = '<p class="error">모든 문항에 답변해 주세요.</p>';
      return;
    }

    const score = Array.from(checked).reduce((sum, input) => sum + Number(input.value), 0);
    const maxScore = totalQuestions * 5;
    const profile = profiles[key].find((item) => score <= item.max) || profiles[key][profiles[key].length - 1];

    resultBox.innerHTML = renderResult(profile, score, maxScore);
    resultBox.classList.add('show');
    resultBox.scrollIntoView({ behavior: 'smooth', block: 'center' });

    const shareButton = resultBox.querySelector('[data-kakao-share]');
    if (shareButton) {
      shareButton.addEventListener('click', () => {
        shareOnKakao(profile.title, profile.summary);
      });
    }
  });

  form.addEventListener('reset', () => {
    resultBox.classList.remove('show');
    resultBox.innerHTML = '';
  });
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
      }
    });
  },
  { threshold: 0.2 }
);

const revealItems = document.querySelectorAll('[data-reveal]');
revealItems.forEach((item) => observer.observe(item));

const navLinks = Array.from(document.querySelectorAll('.sticky-nav a'));
const anchorLinks = navLinks.filter((link) => {
  const href = link.getAttribute('href') || '';
  return href.startsWith('#');
});
const sections = anchorLinks
  .map((link) => document.querySelector(link.getAttribute('href')))
  .filter(Boolean);

const navObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        anchorLinks.forEach((link) => link.classList.remove('active'));
        const activeLink = document.querySelector(`.sticky-nav a[href="#${entry.target.id}"]`);
        if (activeLink) {
          activeLink.classList.add('active');
        }
      }
    });
  },
  { rootMargin: '-40% 0px -50% 0px' }
);

sections.forEach((section) => {
  if (section) {
    navObserver.observe(section);
  }
});



