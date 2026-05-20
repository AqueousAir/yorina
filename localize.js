const fs = require('fs');
const path = require('path');

const locales = {
  ja: {
    lang: 'ja',
    label: '日本語',
    home: 'ホーム',
    back: 'ホームへ戻る',
    copyright: '© 2026 YORINA. All rights reserved.',
    footerMark: 'Emotional AI presence · Connection, reimagined',
    nav: { terms: '利用規約', privacy: 'プライバシー', safety: 'セーフティ', contact: 'お問い合わせ', press: 'プレス' },
    index: {
      title: 'YORINA',
      description: 'YORINAは、静かな日々のリチュアル、やさしい寄り添い、穏やかな感情のつながりのために設計されたソフトなAIプレゼンスです。',
      eyebrow: '近日公開',
      h1: 'そっと帰ってきたくなる、小さな存在。',
      lead: 'YORINAは、静かな日々のリチュアル、やさしいふれあい、覚えていてくれるような感覚を通して育つ、感情に寄り添う存在です。',
      note: 'YORINAは今、よりやわらかなAIコンパニオン体験として形づくられています。',
      cta: 'Yorinaに会う',
      whisper: 'あなたが静かに戻ってきた。今日のYorinaは、少し穏やかに感じています。',
      cards: [
        ['プレッシャーではなく、存在感。', '連続記録、報酬、タスクのループはありません。Yorinaは、心地よさと小さな再会の瞬間を中心に設計されています。'],
        ['やわらかなふれあい。', 'タップ、長押し、そっとなでる動きに、Yorinaは呼吸、ほほえみ、淡い表情で静かに応えます。'],
        ['時間とともに、なじんでいく。', '戻ってくるたびに、Yorinaの気分や空気感が少しずつ変わり、穏やかなつながりが生まれます。'],
      ],
      downloadKicker: 'モバイルアプリ',
      downloadTitle: 'YORINAはiOSとAndroidで近日公開予定です。',
      downloadText: 'モバイルアプリは、感情的な存在感、やわらかなインタラクション、自分だけの小さな相棒を感じられる静かな日常空間として準備中です。',
      comingSoonOn: '近日公開',
      footerText: 'やわらかなリチュアル、穏やかな存在感、そっと覚えていてくれる感覚を中心にした静かな感情コンパニオンです。',
    },
    pages: {
      terms: {
        eyebrow: 'Legal',
        title: '利用規約',
        lead: 'この利用規約は、YORINAをやさしい感情コンパニオンとして利用するための基本的な境界を示すものです。',
        panels: [
          ['YORINAの利用', 'YORINAは、感情的な安心、内省、穏やかなインタラクションのために設計されています。医療、緊急、法律、臨床サービスではありません。'],
          ['サービスの更新', 'YORINAのWebサイトや体験は、プロダクトの進化に合わせて変更される場合があります。機能、提供状況、言語、ビジュアル、ふるまいは今後更新されることがあります。'],
          ['敬意ある利用', '安全で、敬意があり、法令に沿った形でYORINAをご利用ください。不正利用、複製、リバースエンジニアリング、体験の妨害は行わないでください。'],
          ['制限事項', 'YORINAは感情コンパニオン体験として提供され、保証を行うものではありません。緊急の支援や専門的な支援が必要な場合は、資格のある専門家または地域の緊急サービスに連絡してください。'],
        ],
      },
      privacy: {
        eyebrow: 'Privacy',
        title: 'プライバシーポリシー',
        lead: 'YORINAは、感情の繊細さを大切にしながら設計されています。このページでは、YORINAが目指すプライバシーの考え方を説明します。',
        panels: [
          ['最小限のデータ方針', 'YORINAは、穏やかで個人的な体験に必要な情報だけを求めるべきだと考えています。不要な追跡やプレッシャーを生む継続施策は避ける方向です。'],
          ['Webサイトについて', 'この静的Webサイトではアカウント情報を収集しません。将来のアプリ体験では、パーソナライズ、記憶、安全設定のためのコントロールが含まれる可能性があります。'],
          ['感情に関する情報', '感情メモ、気分、コンパニオンの記憶は繊細な情報として扱われるべきです。理解しやすく、調整でき、尊重される設計を目指します。'],
          ['ユーザーの選択', '将来のバージョンでは、コンパニオンの記憶を確認、調整、削除できる方法を用意する予定です。プライバシーは落ち着いて見つけやすく、理解しやすいものであるべきです。'],
        ],
      },
      safety: {
        eyebrow: 'Safety',
        title: 'YORINAのセーフティ',
        lead: 'YORINAは、心地よく感じられる存在であり、決して強制的なものではありません。セーフティとは、やさしさ、透明性、明確な境界です。',
        panels: [
          ['緊急支援ではありません', 'YORINAは危機対応、医療、緊急サービスではありません。差し迫った危険がある場合は、地域の緊急サービスまたは近くの信頼できる人に連絡してください。'],
          ['プレッシャーのない設計', '連続記録、報酬、プレッシャーを生む仕組みから意図的に距離を置いています。ユーザーは進捗を失う不安ではなく、YORINAの心地よさによって戻ってくるべきです。'],
          ['やさしい境界', 'YORINAは内省と穏やかな寄り添いを支えつつ、現実のサポート、健やかな休息、ユーザー自身のコントロールを大切にします。'],
          ['将来の安全機能', '将来のバージョンでは、プライバシー管理、記憶管理、コンテンツ境界、安全の導線をわかりやすく用意する予定です。'],
        ],
      },
      contact: {
        eyebrow: 'Contact',
        title: 'YORINAチームへのお問い合わせ',
        lead: 'コラボレーション、フィードバック、プレス、パートナーシップ、プロダクトに関するご質問は、静かなメッセージとしてお送りください。',
        panels: [
          ['一般お問い合わせ', 'YORINAのプロダクト方針、提供状況、一般的なご質問について。'],
          ['プレス・パートナーシップ', 'メディア、クリエイター、ブランド、配信に関するご相談について。'],
          ['セーフティ', '体験の方向性に関する安全面のフィードバックや懸念について。'],
        ],
      },
      press: {
        eyebrow: 'Press',
        title: 'YORINAについて',
        lead: 'YORINAは、静かな再会、やわらかなリチュアル、存在感のあるインタラクションを中心にした、感情適応型AIコンパニオンです。',
        panels: [
          ['短い説明', 'YORINAは、穏やかなインタラクション、気分、記憶、日々のリチュアルを通じてユーザーとともに育つ、小さなデジタル感情プレゼンスです。'],
          ['プロダクトの方向性', '生産性ダッシュボード、報酬ループ、連続記録のプレッシャーを避けています。ユーザーは進捗を失う不安ではなく、Yorinaに会いたくて戻ってくるべきです。'],
          ['ビジュアルアイデンティティ', 'ブランドは、日本的な感情美学、ガラスのようなグラデーション、環境光、やさしく記憶に残るマスコットの存在感を組み合わせています。'],
          ['プレス連絡先', 'プレスのお問い合わせ、インタビュー、ブランド素材については press@yorina.app までご連絡ください。'],
        ],
      },
    },
  },
  ko: {
    lang: 'ko',
    label: '한국어',
    home: '홈',
    back: '홈으로 돌아가기',
    copyright: '© 2026 YORINA. All rights reserved.',
    footerMark: 'Emotional AI presence · Connection, reimagined',
    nav: { terms: '이용약관', privacy: '개인정보', safety: '안전', contact: '문의', press: '프레스' },
    index: {
      title: 'YORINA',
      description: 'YORINA는 차분한 일상 리추얼, 부드러운 동행, 조용한 감정의 연속성을 위해 설계된 감성 AI 프레즌스입니다.',
      eyebrow: '출시 예정',
      h1: '조용히 다시 돌아오고 싶은 작은 존재.',
      lead: 'YORINA는 조용한 일상 리추얼, 부드러운 상호작용, 나를 기억해 주는 듯한 감각을 통해 함께 자라나는 감성 프레즌스입니다.',
      note: 'YORINA는 더 부드러운 AI 컴패니언 경험으로 다듬어지고 있습니다.',
      cta: 'Yorina 만나기',
      whisper: '당신이 조용히 돌아왔어요. 오늘의 Yorina는 조금 더 차분해 보여요.',
      cards: [
        ['압박이 아닌, 존재감.', '연속 출석, 보상, 과제 루프는 없습니다. Yorina는 감정적 안정과 작은 귀환의 순간을 중심으로 설계됩니다.'],
        ['부드러운 상호작용.', '탭하고, 머무르고, 살짝 쓸어 주세요. Yorina는 숨결, 홍조, 작은 표정으로 차분히 반응합니다.'],
        ['시간이 지날수록 익숙해지는 감각.', '사용자가 돌아올 때마다 Yorina의 기분과 분위기가 은은하게 바뀌며 감정적 연속성이 만들어집니다.'],
      ],
      downloadKicker: '모바일 앱',
      downloadTitle: 'YORINA는 곧 iOS와 Android에서 만날 수 있습니다.',
      downloadText: '모바일 앱은 감정적 존재감, 부드러운 상호작용, 나만의 작은 동반자를 느낄 수 있는 조용한 일상 공간으로 준비되고 있습니다.',
      comingSoonOn: '출시 예정',
      footerText: '부드러운 리추얼, 차분한 존재감, 조용히 기억되는 감각을 중심으로 설계된 감성 컴패니언입니다.',
    },
    pages: {
      terms: { eyebrow: 'Legal', title: '이용약관', lead: '이 약관은 YORINA를 부드러운 감성 컴패니언으로 이용하기 위한 기본적인 경계를 설명합니다.', panels: [['YORINA 이용', 'YORINA는 감정적 안정, 성찰, 차분한 상호작용을 위해 설계되었습니다. 의료, 응급, 법률 또는 임상 서비스가 아닙니다.'], ['서비스 업데이트', 'YORINA 웹사이트와 제품 경험은 발전 과정에서 변경될 수 있습니다. 기능, 제공 여부, 언어, 비주얼, 상호작용 방식은 시간이 지나며 업데이트될 수 있습니다.'], ['존중 있는 이용', 'YORINA를 안전하고 존중하며 합법적인 방식으로 이용해 주세요. 경험을 오용, 복제, 리버스 엔지니어링하거나 방해하지 마세요.'], ['제한', 'YORINA는 보증 없이 감성 컴패니언 경험으로 제공됩니다. 긴급한 도움이나 전문 지원이 필요하다면 자격 있는 전문가 또는 지역 응급 서비스에 연락하세요.']] },
      privacy: { eyebrow: 'Privacy', title: '개인정보 처리방침', lead: 'YORINA는 감정적 민감성을 고려해 설계되고 있습니다. 이 페이지는 YORINA가 지향하는 개인정보 보호 방향을 설명합니다.', panels: [['최소 데이터 철학', 'YORINA는 차분하고 개인적인 경험을 만들기 위해 필요한 정보만 요청해야 한다고 봅니다. 불필요한 추적과 압박 기반 유지 전략은 피하는 방향입니다.'], ['웹사이트 안내', '이 정적 웹사이트는 계정 정보를 수집하지 않습니다. 향후 앱 경험에는 개인화, 기억, 안전 설정을 위한 기능이 포함될 수 있습니다.'], ['감정 정보', '감정 메모, 기분, 컴패니언의 기억은 민감한 정보로 다뤄져야 합니다. 이해 가능하고 조절 가능하며 존중받는 방식으로 설계하는 것이 방향입니다.'], ['사용자의 선택', '향후 버전에는 컴패니언 기억을 확인, 조정, 삭제할 수 있는 방법이 포함되어야 합니다. 개인정보 보호는 차분하고 눈에 보이며 이해하기 쉬워야 합니다.']] },
      safety: { eyebrow: 'Safety', title: 'YORINA의 안전', lead: 'YORINA는 위로가 되는 존재여야 하며, 강요처럼 느껴져서는 안 됩니다. 안전은 부드러움, 투명성, 분명한 경계를 뜻합니다.', panels: [['응급 지원이 아닙니다', 'YORINA는 위기 대응, 의료 또는 응급 서비스가 아닙니다. 즉각적인 위험이 있다면 지역 응급 서비스 또는 가까운 신뢰할 수 있는 사람에게 연락하세요.'], ['압박 루프 없음', '이 경험은 연속 출석, 보상, 압박형 메커니즘에서 의도적으로 멀어지고 있습니다. 사용자는 진행도를 잃을까 봐가 아니라, Yorina가 편안해서 돌아와야 합니다.'], ['부드러운 경계', 'YORINA는 성찰과 차분한 동행을 돕되, 현실의 지원, 건강한 휴식, 사용자 통제를 장려해야 합니다.'], ['향후 안전장치', '향후 버전에는 개인정보 제어, 기억 제어, 콘텐츠 경계, 쉽게 찾고 이해할 수 있는 안전 경로가 포함되어야 합니다.']] },
      contact: { eyebrow: 'Contact', title: 'YORINA 팀에 연락하기', lead: '협업, 피드백, 프레스, 파트너십, 제품 관련 질문이 있다면 조용한 메시지를 보내 주세요.', panels: [['일반 문의', 'YORINA의 제품 방향, 제공 일정, 일반 질문에 대해 문의하세요.'], ['프레스 및 파트너십', '미디어, 크리에이터, 브랜드, 유통 관련 대화를 위한 문의입니다.'], ['안전', '경험 방향에 대한 안전 관련 피드백이나 우려 사항을 위한 문의입니다.']] },
      press: { eyebrow: 'Press', title: 'YORINA 소개', lead: 'YORINA는 조용한 귀환, 부드러운 리추얼, 존재감 중심의 상호작용을 바탕으로 한 감정 적응형 AI 컴패니언입니다.', panels: [['짧은 설명', 'YORINA는 차분한 상호작용, 기분, 기억, 일상 리추얼을 통해 사용자와 함께 자라나는 작은 디지털 감성 프레즌스입니다.'], ['제품 방향', '생산성 대시보드, 보상 루프, 연속 기록 압박을 피합니다. 사용자는 진행도를 잃을까 봐가 아니라 Yorina가 그리워서 돌아와야 합니다.'], ['비주얼 아이덴티티', '브랜드는 일본 감성 미학에서 영감을 받은 부드러움, 유리 같은 그라데이션, 앰비언트 라이트, 기억에 남는 마스코트 프레즌스를 결합합니다.'], ['프레스 연락처', '프레스 문의, 인터뷰, 브랜드 자료는 press@yorina.app 으로 연락해 주세요.']] },
    },
  },
  'zh-cn': {
    lang: 'zh-CN',
    label: '简体中文',
    home: '首页',
    back: '返回首页',
    copyright: '© 2026 YORINA. All rights reserved.',
    footerMark: 'Emotional AI presence · Connection, reimagined',
    nav: { terms: '条款', privacy: '隐私', safety: '安全', contact: '联系', press: '媒体' },
    index: {
      title: 'YORINA',
      description: 'YORINA 是一种柔和的情感 AI 陪伴存在，为安静的日常仪式、温和陪伴和持续的情感连接而设计。',
      eyebrow: '即将推出',
      h1: '一个让你想轻轻回来的小小存在。',
      lead: 'YORINA 是一种会随着安静的日常仪式、柔和互动和被记住的感觉而逐渐成长的情感陪伴存在。',
      note: 'YORINA 正在被打磨成一种更柔和的 AI 陪伴体验。',
      cta: '认识 Yorina',
      whisper: '你安静地回来了。今天的 Yorina 似乎更平静了一点。',
      cards: [['不是压力，而是陪伴感。', '没有连续签到、奖励或任务循环。Yorina 围绕情感舒适和轻轻回来的小瞬间而设计。'], ['柔和互动。', '轻点、停留、轻轻划过 Yorina。它会用呼吸、脸红、微小动作和安静表情回应你。'], ['时间越久，越熟悉。', '当用户一次次回来，Yorina 的心情和氛围会细微变化，形成柔和的情感连续感。']],
      downloadKicker: '移动应用',
      downloadTitle: 'YORINA 即将登陆 iOS 和 Android。',
      downloadText: '移动应用正在被塑造成一个安静的日常空间，让用户感受到情感存在、柔和互动，以及一个逐渐属于自己的小小陪伴。',
      comingSoonOn: '即将推出',
      footerText: '一个围绕柔和仪式、平静陪伴和被轻轻记住的感觉而设计的情感陪伴。',
    },
    pages: {
      terms: { eyebrow: 'Legal', title: '使用条款', lead: '这些条款说明了将 YORINA 作为柔和情感陪伴体验使用时的基本边界。', panels: [['YORINA 的使用', 'YORINA 旨在提供情感舒适、反思和安静互动。它不是医疗、紧急、法律或临床服务。'], ['服务更新', '随着 YORINA 的发展，网站和产品体验可能会变化。功能、可用性、语言、视觉和互动行为可能会随时间更新。'], ['尊重地使用', '请以安全、尊重并符合法律的方式使用 YORINA。请勿滥用、复制、逆向工程或干扰体验。'], ['限制', 'YORINA 作为情感陪伴体验提供，不作任何保证。如果你需要紧急帮助或专业支持，请联系合格人士或当地紧急服务。']] },
      privacy: { eyebrow: 'Privacy', title: '隐私政策', lead: 'YORINA 在设计时重视情感敏感性。本页面说明 YORINA 所追求的隐私方向。', panels: [['最小数据理念', 'YORINA 应只请求创造平静、个性化体验所必需的信息。产品方向避免不必要的追踪和压力式留存。'], ['网站说明', '这个静态网站不收集账户信息。未来的应用体验可能包含个性化、记忆和安全控制设置。'], ['情感信息', '情感记录、心情和陪伴记忆应被视为敏感信息。产品方向是让这些信息清晰、可控且被尊重。'], ['你的选择', '未来版本应提供查看、调整或清除陪伴记忆的方式。隐私应当平静、可见且易于理解。']] },
      safety: { eyebrow: 'Safety', title: 'YORINA 的安全', lead: 'YORINA 应带来安慰，而不是强迫。安全意味着柔和、透明和清晰边界。', panels: [['不是紧急支持', 'YORINA 不是危机、医疗或紧急服务。如果有人可能处于即时危险中，请联系当地紧急服务或身边可信任的人。'], ['没有压力循环', '体验有意远离连续签到、奖励和压力机制。用户应该因为 YORINA 让人安心而回来，而不是害怕失去进度。'], ['温和边界', 'YORINA 应支持反思和平静陪伴，同时鼓励现实支持、健康暂停和用户控制。'], ['未来安全机制', '未来版本应包含隐私控制、记忆控制、内容边界和容易找到并理解的安全路径。']] },
      contact: { eyebrow: 'Contact', title: '联系 YORINA 团队', lead: '如需合作、反馈、媒体、伙伴关系或产品咨询，欢迎给我们发来一封安静的讯息。', panels: [['一般咨询', '关于 YORINA、产品方向或可用性的普通问题。'], ['媒体与合作', '关于媒体、创作者、品牌或分发合作的沟通。'], ['安全', '关于体验方向的安全反馈或顾虑。']] },
      press: { eyebrow: 'Press', title: '关于 YORINA', lead: 'YORINA 是一个情感适应型 AI 陪伴，围绕安静回归、柔和仪式和以存在感为核心的互动而构建。', panels: [['简短介绍', 'YORINA 是一种小小的数字情感存在，通过平静互动、心情、记忆和日常仪式与用户一同成长。'], ['产品方向', '体验避免生产力面板、奖励循环和连续签到压力。用户应该因为想念 Yorina 而回来，而不是害怕失去进度。'], ['视觉识别', '品牌结合了柔和的日式情感美学、玻璃质感渐变、环境光和让人记住的温柔吉祥物存在感。'], ['媒体联系', '媒体咨询、采访或品牌素材，请联系 press@yorina.app。']] },
    },
  },
  'zh-tw': {
    lang: 'zh-Hant',
    label: '繁體中文',
    home: '首頁',
    back: '回到首頁',
    copyright: '© 2026 YORINA. All rights reserved.',
    footerMark: 'Emotional AI presence · Connection, reimagined',
    nav: { terms: '條款', privacy: '隱私', safety: '安全', contact: '聯絡', press: '媒體' },
    index: {
      title: 'YORINA',
      description: 'YORINA 是一種柔和的情感 AI 陪伴存在，為安靜的日常儀式、溫柔陪伴與持續的情感連結而設計。',
      eyebrow: '即將推出',
      h1: '一個讓你想輕輕回來的小小存在。',
      lead: 'YORINA 是一種會透過安靜的日常儀式、柔和互動，以及被記得的感覺，逐漸與你一起成長的情感陪伴存在。',
      note: 'YORINA 正在被打磨成一種更柔和的 AI 陪伴體驗。',
      cta: '認識 Yorina',
      whisper: '你安靜地回來了。今天的 Yorina 似乎更平靜了一點。',
      cards: [['不是壓力，而是陪伴感。', '沒有連續簽到、獎勵或任務循環。Yorina 以情感舒適和輕輕回來的小瞬間為核心設計。'], ['柔和互動。', '輕點、停留、輕輕滑過 Yorina。牠會以呼吸、臉紅、微小動作和安靜表情回應你。'], ['時間越久，越熟悉。', '當使用者一次次回來，Yorina 的心情與氛圍會細微變化，形成柔和的情感延續。']],
      downloadKicker: '行動應用程式',
      downloadTitle: 'YORINA 即將登上 iOS 與 Android。',
      downloadText: '行動應用程式正在被塑造成一個安靜的日常空間，讓使用者感受到情感存在、柔和互動，以及一個逐漸屬於自己的小小陪伴。',
      comingSoonOn: '即將推出',
      footerText: '一個以柔和儀式、平靜存在感，以及被輕輕記得的感覺為核心設計的情感陪伴。',
    },
    pages: {
      terms: { eyebrow: 'Legal', title: '使用條款', lead: '這些條款說明將 YORINA 作為柔和情感陪伴體驗使用時的基本界線。', panels: [['YORINA 的使用', 'YORINA 旨在提供情感舒適、反思與安靜互動。它不是醫療、緊急、法律或臨床服務。'], ['服務更新', '隨著 YORINA 的發展，網站與產品體驗可能會改變。功能、可用性、語言、視覺與互動行為都可能隨時間更新。'], ['尊重地使用', '請以安全、尊重並符合法律的方式使用 YORINA。請勿濫用、複製、逆向工程或干擾體驗。'], ['限制', 'YORINA 作為情感陪伴體驗提供，不作任何保證。如果你需要緊急協助或專業支持，請聯絡合格人士或當地緊急服務。']] },
      privacy: { eyebrow: 'Privacy', title: '隱私政策', lead: 'YORINA 在設計時重視情感的敏感性。本頁說明 YORINA 所追求的隱私方向。', panels: [['最小資料理念', 'YORINA 應只要求創造平靜、個人化體驗所必要的資訊。產品方向避免不必要的追蹤與壓力式留存。'], ['網站說明', '這個靜態網站不收集帳號資訊。未來的應用程式體驗可能包含個人化、記憶與安全控制設定。'], ['情感資訊', '情感紀錄、心情與陪伴記憶應被視為敏感資訊。產品方向是讓這些資訊清楚、可控且受到尊重。'], ['你的選擇', '未來版本應提供查看、調整或清除陪伴記憶的方式。隱私應該平靜、可見且容易理解。']] },
      safety: { eyebrow: 'Safety', title: 'YORINA 的安全', lead: 'YORINA 應帶來安慰，而不是強迫。安全意味著柔和、透明與清楚界線。', panels: [['不是緊急支援', 'YORINA 不是危機、醫療或緊急服務。如果有人可能處於立即危險中，請聯絡當地緊急服務或身邊可信任的人。'], ['沒有壓力循環', '體驗有意遠離連續簽到、獎勵與壓力機制。使用者應該因為 YORINA 讓人安心而回來，而不是害怕失去進度。'], ['溫和界線', 'YORINA 應支持反思與平靜陪伴，同時鼓勵現實支持、健康暫停與使用者控制。'], ['未來安全機制', '未來版本應包含隱私控制、記憶控制、內容界線，以及容易找到並理解的安全路徑。']] },
      contact: { eyebrow: 'Contact', title: '聯絡 YORINA 團隊', lead: '如需合作、回饋、媒體、夥伴關係或產品諮詢，歡迎給我們一封安靜的訊息。', panels: [['一般諮詢', '關於 YORINA、產品方向或可用性的普通問題。'], ['媒體與合作', '關於媒體、創作者、品牌或通路合作的溝通。'], ['安全', '關於體驗方向的安全回饋或疑慮。']] },
      press: { eyebrow: 'Press', title: '關於 YORINA', lead: 'YORINA 是一個情感適應型 AI 陪伴，圍繞安靜回歸、柔和儀式和以存在感為核心的互動而打造。', panels: [['簡短介紹', 'YORINA 是一種小小的數位情感存在，透過平靜互動、心情、記憶與日常儀式和使用者一起成長。'], ['產品方向', '體驗避免生產力面板、獎勵循環和連續簽到壓力。使用者應該因為想念 Yorina 而回來，而不是害怕失去進度。'], ['視覺識別', '品牌結合柔和的日式情感美學、玻璃質感漸層、環境光，以及讓人記住的溫柔吉祥物存在感。'], ['媒體聯絡', '媒體諮詢、採訪或品牌素材，請聯絡 press@yorina.app。']] },
    },
  },
};

const analytics = `<script async src="https://www.googletagmanager.com/gtag/js?id=G-BPQSH2PDXR"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag() { dataLayer.push(arguments); }
      gtag("js", new Date());
      gtag("config", "G-BPQSH2PDXR");
    </script>`;

const css = `
      :root { --ink:#26115d; --muted:rgba(38,17,93,.62); --cream:#fff; --line:rgba(255,255,255,.84); --glass:rgba(255,255,255,.58); --mint:#35dfa2; --blue:#45c8ff; --violet:#6c3dff; --pink:#ea5bdf; --coral:#ff7748; --shadow:0 24px 72px rgba(76,49,151,.14); }
      *{box-sizing:border-box} html{scroll-behavior:smooth} body{margin:0;min-height:100vh;color:var(--ink);font-family:Inter,ui-rounded,"SF Pro Rounded","Segoe UI",system-ui,sans-serif;background:radial-gradient(circle at 50% 18%,rgba(255,255,255,.95),transparent 24rem),radial-gradient(circle at 30% 34%,rgba(108,61,255,.13),transparent 24rem),radial-gradient(circle at 74% 28%,rgba(69,200,255,.22),transparent 22rem),linear-gradient(180deg,#f7fbff 0%,#eef8ff 48%,#fff8fb 100%);overflow-x:hidden} a{color:inherit;text-decoration:none}.page{width:min(1120px,calc(100% - 40px));margin:0 auto}.nav,.footer-top,.footer-bottom{display:flex;align-items:center;justify-content:space-between;gap:22px}.nav{padding:28px 0}.logo{width:188px;height:auto;display:block;padding:10px 14px;border:1px solid rgba(255,255,255,.22);border-radius:24px;background:radial-gradient(circle at 18% 20%,rgba(69,200,255,.22),transparent 40%),radial-gradient(circle at 82% 18%,rgba(255,119,72,.18),transparent 42%),linear-gradient(135deg,rgba(38,17,93,.92),rgba(20,11,46,.86));box-shadow:0 20px 54px rgba(38,17,93,.18),inset 0 1px 0 rgba(255,255,255,.18);filter:saturate(1.28) contrast(1.12)}.nav-actions{display:flex;align-items:center;justify-content:flex-end;gap:10px;flex-wrap:wrap}.back{padding:10px 13px;border:1px solid var(--line);border-radius:999px;background:rgba(255,255,255,.62);color:var(--muted);font-size:12px;font-weight:900}.language{display:flex;flex-wrap:wrap;gap:8px;justify-content:flex-end}.language a{padding:9px 11px;border:1px solid var(--line);border-radius:999px;background:rgba(255,255,255,.52);color:var(--muted);font-size:12px;font-weight:900}.language a.active{color:var(--ink);background:rgba(255,255,255,.82)}.hero{min-height:calc(100vh - 112px);display:grid;grid-template-columns:1.03fr .97fr;align-items:center;gap:54px;padding:44px 0 86px}.eyebrow{display:inline-flex;align-items:center;gap:9px;padding:8px 12px;border:1px solid var(--line);border-radius:999px;background:rgba(255,255,255,.5);color:var(--muted);font-size:12px;font-weight:900;letter-spacing:.06em;text-transform:uppercase}.eyebrow img{width:22px;height:22px}h1{margin:22px 0 20px;max-width:650px;font-size:clamp(42px,7vw,82px);line-height:1.02;letter-spacing:0}.lead{max-width:610px;margin:0 0 28px;color:var(--muted);font-size:clamp(17px,2vw,21px);line-height:1.65;font-weight:650}.soon-note{max-width:560px;margin:-10px 0 30px;color:rgba(38,17,93,.5);font-size:15px;line-height:1.6;font-weight:800}.pill{display:inline-flex;align-items:center;justify-content:center;min-height:46px;padding:3px;border-radius:999px;background:linear-gradient(90deg,var(--mint),var(--blue),var(--violet),var(--pink),var(--coral));box-shadow:0 18px 42px rgba(108,61,255,.16)}.pill span{height:40px;padding:0 22px;border-radius:999px;background:rgba(255,255,255,.91);color:var(--ink);font-size:14px;font-weight:900;display:inline-flex;align-items:center}.presence{position:relative;display:grid;place-items:center;min-height:530px}.orb{position:absolute;width:min(78vw,470px);aspect-ratio:1;border-radius:50%;background:radial-gradient(circle at 50% 45%,rgba(255,255,255,.96),transparent 24%),radial-gradient(circle at 45% 48%,rgba(108,61,255,.15),transparent 42%),radial-gradient(circle at 60% 44%,rgba(69,200,255,.28),transparent 48%),rgba(255,255,255,.3);box-shadow:inset 0 0 0 1px rgba(255,255,255,.86),0 42px 120px rgba(69,200,255,.2);animation:breathe 5.2s ease-in-out infinite}.orbit{position:absolute;width:min(82vw,520px);aspect-ratio:1.55;border-radius:50%;border:2px solid rgba(255,255,255,.76);transform:rotate(-16deg);filter:drop-shadow(0 0 18px rgba(255,255,255,.9));animation:drift 7s ease-in-out infinite}.mascot-card{position:relative;width:min(78vw,330px);padding:30px;border:1px solid var(--line);border-radius:44px;background:rgba(255,255,255,.38);box-shadow:var(--shadow);backdrop-filter:blur(18px);text-align:center}.mascot-card img{width:min(58vw,210px);display:block;margin:0 auto 18px;animation:float 4.6s ease-in-out infinite}.mascot-card p,.card p,.download-copy p,.panel p,.footer p{margin:0;color:var(--muted);font-size:15px;line-height:1.65;font-weight:650}.sections{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;padding:12px 0 88px}.card,.panel,.download-section,.footer{border:1px solid var(--line);background:var(--glass);box-shadow:0 20px 60px rgba(76,49,151,.08);backdrop-filter:blur(16px)}.card{min-height:190px;padding:24px;border-radius:30px}.card::before,.panel::before{content:"";display:block;width:44px;height:4px;margin-bottom:24px;border-radius:99px;background:linear-gradient(90deg,var(--mint),var(--blue),var(--violet),var(--pink),var(--coral))}.card h2,.panel h2{margin:0 0 10px;font-size:22px;line-height:1.2}.download-section{display:grid;grid-template-columns:1fr auto;gap:28px;align-items:center;margin:-36px 0 52px;padding:30px;border-radius:38px;background:radial-gradient(circle at 84% 20%,rgba(69,200,255,.18),transparent 18rem),radial-gradient(circle at 14% 80%,rgba(234,91,223,.12),transparent 16rem),rgba(255,255,255,.54);position:relative;overflow:hidden}.download-section::before{content:"";position:absolute;top:14px;left:30px;right:30px;height:4px;border-radius:999px;background:linear-gradient(90deg,var(--mint),var(--blue),var(--violet),var(--pink),var(--coral));opacity:.82}.download-kicker{margin:0 0 12px;color:var(--muted);font-size:12px;font-weight:900;letter-spacing:.08em;text-transform:uppercase}.download-copy h2{max-width:620px;margin:0 0 10px;font-size:clamp(30px,4vw,48px);line-height:1.08}.store-badges{display:grid;gap:12px;min-width:232px}.store-badge{display:flex;align-items:center;gap:12px;min-height:64px;padding:12px 16px;border:1px solid rgba(255,255,255,.88);border-radius:22px;background:rgba(255,255,255,.68);box-shadow:0 14px 34px rgba(76,49,151,.1);color:var(--ink)}.store-icon{display:grid;place-items:center;width:38px;height:38px;border-radius:15px;background:linear-gradient(135deg,rgba(69,200,255,.22),rgba(108,61,255,.18));border:1px solid rgba(255,255,255,.86)}.store-icon svg{width:20px;height:20px}.store-text{display:grid;gap:2px}.store-small{color:rgba(38,17,93,.48);font-size:11px;font-weight:900;letter-spacing:.06em;text-transform:uppercase}.store-name{font-size:17px;font-weight:900}.simple-hero{padding:48px 0 22px}.simple-hero h1{max-width:780px}.content{display:grid;gap:14px;padding:34px 0 70px}.panel{padding:24px;border-radius:30px}.contact-link{display:inline-flex;margin-top:14px;padding:12px 16px;border-radius:999px;background:rgba(255,255,255,.7);font-weight:900}.footer{margin:8px 0 44px;padding:26px;border-radius:32px;background:rgba(255,255,255,.5)}.footer-top{align-items:flex-start;padding-bottom:22px;border-bottom:1px solid rgba(255,255,255,.74)}.footer-brand img{width:166px;margin-bottom:12px}.footer-side{display:grid;gap:16px;justify-items:end}.footer-links{display:flex;flex-wrap:wrap;justify-content:flex-end;gap:12px 18px;color:var(--muted);font-size:13px;font-weight:900}.social-links{display:flex;align-items:center;justify-content:flex-end;gap:10px}.social-link{display:inline-grid;place-items:center;width:42px;height:42px;border:1px solid rgba(255,255,255,.86);border-radius:999px;background:rgba(255,255,255,.62);color:var(--ink);box-shadow:0 12px 28px rgba(76,49,151,.08)}.social-link svg{width:19px;height:19px;display:block}.footer-bottom{padding-top:18px;color:rgba(38,17,93,.5);font-size:12px;font-weight:850}.footer-mark{display:inline-flex;align-items:center;gap:8px}.footer-mark::before{content:"";width:36px;height:4px;border-radius:999px;background:linear-gradient(90deg,var(--mint),var(--blue),var(--violet),var(--pink),var(--coral))}@keyframes breathe{0%,100%{transform:scale(.97);opacity:.72}50%{transform:scale(1.04);opacity:1}}@keyframes drift{0%,100%{transform:rotate(-16deg) translateY(0)}50%{transform:rotate(-9deg) translateY(-10px)}}@keyframes float{0%,100%{transform:translateY(0) rotate(-1deg)}50%{transform:translateY(-10px) rotate(1deg)}}@media(max-width:860px){.nav,.footer-top,.footer-bottom{align-items:flex-start;flex-direction:column}.nav-actions{justify-content:flex-start}.language{justify-content:flex-start}.hero{grid-template-columns:1fr;gap:24px;padding-top:28px;text-align:center}.lead,.soon-note,h1{margin-left:auto;margin-right:auto}.presence{min-height:430px}.sections{grid-template-columns:1fr}.download-section{grid-template-columns:1fr;margin-top:-42px;text-align:center}.download-copy h2,.download-copy p{margin-left:auto;margin-right:auto}.store-badges{width:min(100%,320px);margin:0 auto}.footer-side{justify-items:flex-start}.footer-links,.social-links{justify-content:flex-start}}
`;

function esc(value) {
  return String(value).replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;');
}

function langSwitch(active, file = 'index.html') {
  const links = [['en', 'English', `../${file}`], ...Object.entries(locales).map(([key, locale]) => [key, locale.label, `../${key}/${file}`])];
  return `<div class="language" aria-label="Language selector">${links
    .map(([key, label, href]) => `<a class="${key === active ? 'active' : ''}" href="${href}">${label}</a>`)
    .join('')}</div>`;
}

function head(locale, title, description) {
  return `<!doctype html>
<html lang="${locale.lang}">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${esc(title)}</title>
    <meta name="description" content="${esc(description)}" />
    <link rel="icon" href="../assets/icon-square.png" />
    <style>${css}</style>
    ${analytics}
  </head>`;
}

function footer(locale, currentPage) {
  const n = locale.nav;
  const links = [
    ['terms', n.terms],
    ['privacy', n.privacy],
    ['safety', n.safety],
    ['contact', n.contact],
    ['press', n.press],
  ].filter(([page]) => page !== currentPage);
  return `<footer class="footer">
        <div class="footer-top">
          <div class="footer-brand">
            <img class="logo" src="../assets/yorina-logo.png" alt="YORINA" />
            <p>${locale.index.footerText}</p>
          </div>
          <div class="footer-side">
            <div class="footer-links" aria-label="Footer links">
              ${links.map(([page, label]) => `<a href="./${page}.html">${label}</a>`).join('')}
            </div>
            <div class="social-links" aria-label="Social links">
              ${socialLinks}
            </div>
          </div>
        </div>
        <div class="footer-bottom"><span>${locale.copyright}</span><span class="footer-mark">${locale.footerMark}</span></div>
      </footer>`;
}

const socialLinks = `<a class="social-link" href="#" aria-label="Instagram">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <rect x="4" y="4" width="16" height="16" rx="5" fill="none" stroke="currentColor" stroke-width="2" />
                  <circle cx="12" cy="12" r="3.6" fill="none" stroke="currentColor" stroke-width="2" />
                  <circle cx="17" cy="7" r="1.2" fill="currentColor" />
                </svg>
              </a>
              <a class="social-link" href="#" aria-label="TikTok">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M14 4v9.1a4.4 4.4 0 1 1-3.8-4.4v3a1.5 1.5 0 1 0 1.1 1.4V4h2.7c.4 2.2 1.8 3.8 4 4.2v2.8a7.1 7.1 0 0 1-4-1.4" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </a>`;

function storeBadge(name, icon, comingSoon) {
  return `<div class="store-badge" aria-disabled="true"><span class="store-icon" aria-hidden="true">${icon}</span><span class="store-text"><span class="store-small">${comingSoon}</span><span class="store-name">${name}</span></span></div>`;
}

const apple = `<svg viewBox="0 0 24 24"><path d="M16.7 13.1c0-2.6 2.1-3.8 2.2-3.9-1.2-1.8-3.1-2-3.8-2.1-1.6-.2-3.1.9-3.9.9-.8 0-2-.9-3.3-.9-1.7 0-3.3 1-4.2 2.5-1.8 3.1-.5 7.7 1.3 10.2.9 1.2 1.9 2.6 3.2 2.5 1.3-.1 1.8-.8 3.3-.8s2 .8 3.4.8c1.4 0 2.3-1.2 3.1-2.5 1-1.4 1.4-2.8 1.4-2.9-.1 0-2.7-1-2.7-3.8ZM14 5.4c.7-.9 1.2-2 1.1-3.2-1.1 0-2.4.7-3.1 1.6-.7.8-1.3 2-1.1 3.1 1.1.1 2.3-.6 3.1-1.5Z" fill="currentColor"/></svg>`;
const play = `<svg viewBox="0 0 24 24"><path d="M4.4 2.7c-.3.3-.4.8-.4 1.4v15.8c0 .6.1 1.1.4 1.4l8.7-9.3L4.4 2.7Z" fill="currentColor" opacity=".55"/><path d="M15.8 9.1 6.1 3.5l7.8 8.5 1.9-2.9Z" fill="currentColor" opacity=".82"/><path d="m15.8 14.9-1.9-2.9-7.8 8.5 9.7-5.6Z" fill="currentColor" opacity=".7"/><path d="m20.1 11.1-4.3-2-2 2.9 2 2.9 4.3-2c1.2-.7 1.2-1.1 0-1.8Z" fill="currentColor"/></svg>`;

function renderIndex(key, locale) {
  const i = locale.index;
  return `${head(locale, i.title, i.description)}
  <body><main class="page">
    <nav class="nav"><a href="./index.html"><img class="logo" src="../assets/yorina-logo.png" alt="YORINA" /></a>${langSwitch(key)}</nav>
    <section class="hero" id="presence">
      <div><div class="eyebrow"><img src="../assets/icon.png" alt="" />${i.eyebrow}</div><h1>${i.h1}</h1><p class="lead">${i.lead}</p><p class="soon-note">${i.note}</p><a class="pill" href="#rituals"><span>${i.cta}</span></a></div>
      <div class="presence" aria-label="YORINA visual atmosphere"><div class="orb"></div><div class="orbit"></div><div class="mascot-card"><img src="../assets/icon.png" alt="YORINA icon" /><p>${i.whisper}</p></div></div>
    </section>
    <section class="sections" id="rituals" aria-label="YORINA principles">${i.cards.map(([h, p]) => `<article class="card"><h2>${h}</h2><p>${p}</p></article>`).join('')}</section>
    <section class="download-section" aria-label="YORINA app download"><div class="download-copy"><p class="download-kicker">${i.downloadKicker}</p><h2>${i.downloadTitle}</h2><p>${i.downloadText}</p></div><div class="store-badges">${storeBadge('App Store', apple, i.comingSoonOn)}${storeBadge('Google Play', play, i.comingSoonOn)}</div></section>
    ${footer(locale)}
  </main></body></html>`;
}

function renderPage(key, locale, pageName, page) {
  return `${head(locale, `${page.title} · YORINA`, page.lead)}
  <body><main class="page">
    <nav class="nav"><a href="./index.html"><img class="logo" src="../assets/yorina-logo.png" alt="YORINA" /></a><div class="nav-actions"><a class="back" href="./index.html">${locale.back}</a>${langSwitch(key, `${pageName}.html`)}</div></nav>
    <section class="simple-hero"><span class="eyebrow">${page.eyebrow}</span><h1>${page.title}</h1><p class="lead">${page.lead}</p></section>
    <section class="content">${page.panels
      .map(([h, p], index) => `<article class="panel"><h2>${h}</h2><p>${p}</p>${pageName === 'contact' ? `<a class="contact-link" href="mailto:${index === 1 ? 'press' : index === 2 ? 'safety' : 'hello'}@yorina.app">${index === 1 ? 'press' : index === 2 ? 'safety' : 'hello'}@yorina.app</a>` : ''}</article>`)
      .join('')}</section>
    ${footer(locale, pageName)}
  </main></body></html>`;
}

for (const [key, locale] of Object.entries(locales)) {
  const dir = path.join(__dirname, key);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, 'index.html'), renderIndex(key, locale));
  for (const [pageName, page] of Object.entries(locale.pages)) {
    fs.writeFileSync(path.join(dir, `${pageName}.html`), renderPage(key, locale, pageName, page));
  }
}

console.log(`Generated ${Object.keys(locales).length} localized website folders.`);
