import { createContext, useContext, ReactNode } from 'react';

// 定義所有文字的類型
export interface I18nStrings {
  // Landing Page
  landing: {
    hero: {
      title: string;
      subtitle: string;
      startCreating: string;
      exploreGames: string;
    };
    features: {
      visualCoding: {
        title: string;
        description: string;
      };
      instantPreview: {
        title: string;
        description: string;
      };
      collaborate: {
        title: string;
        description: string;
      };
      sharePlay: {
        title: string;
        description: string;
      };
      sectionTitle: string;
      sectionSubtitle: string;
    };
    cta: {
      title: string;
      subtitle: string;
      createFirstGame: string;
    };
  };

  // Game Studio
  gameStudio: {
    title: string;
    untitledGame: string;
    save: string;
    share: string;
    play: string;
    stop: string;
    blocks: string;
    assets: string;
    preview: string;
  };

  // Asset Library
  assetLibrary: {
    sprites: string;
    sounds: string;
    backgrounds: string;
    uploadAsset: string;
    player: string;
    enemy: string;
    coin: string;
    platform: string;
    heart: string;
    star: string;
    jump: string;
    coinSound: string;
    backgroundMusic: string;
    gameOver: string;
    forest: string;
    space: string;
    desert: string;
    city: string;
  };

  // User Profile
  userProfile: {
    myGames: string;
    likedGames: string;
    achievements: string;
    gamesCreated: string;
    totalPlays: string;
    totalLikes: string;
    followers: string;
    following: string;
    plays: string;
    likes: string;
  };

  // Achievement translations
  achievements: {
    first_game: string;
    created_first_game: string;
    popular_creator: string;
    reached_1000_plays: string;
    game_master: string;
    created_10_games: string;
    community_favorite: string;
    received_500_likes: string;
    educator: string;
    created_5_educational_games: string;
    speed_runner: string;
    created_game_in_under_1_hour: string;
  };

  // Common
  common: {
    loading: string;
    error: string;
    success: string;
    cancel: string;
    confirm: string;
    back: string;
    next: string;
    close: string;
    open: string;
    edit: string;
    delete: string;
    add: string;
    remove: string;
    search: string;
    filter: string;
    sort: string;
    save: string;
    share: string;
    joined: string;
    games: string;
    play_game: string;
    target_practice: string;
    improve_your_aim: string;
  };
}

// 中文翻譯
const zhStrings: I18nStrings = {
  landing: {
    hero: {
      title: '用視覺化方式',
      subtitle: 'VibeCoding 讓遊戲開發變得人人皆可參與。只需使用我們直覺的視覺化編程介面即可創建驚人的遊戲 - 無需任何編程經驗。',
      startCreating: '開始創作',
      exploreGames: '探索遊戲'
    },
    features: {
      visualCoding: {
        title: '視覺化編程',
        description: '使用拖拽方塊創建遊戲，無需編程經驗'
      },
      instantPreview: {
        title: '即時預覽',
        description: '在構建遊戲時立即查看您的更改'
      },
      collaborate: {
        title: '協作創作',
        description: '與朋友一起合作創建精彩的遊戲項目'
      },
      sharePlay: {
        title: '分享與遊玩',
        description: '與世界分享您的創作並遊玩他人的遊戲'
      },
      sectionTitle: '創建精彩遊戲所需的一切',
      sectionSubtitle: '從簡單的謎題到複雜的冒險，我們的平台提供實現遊戲想法所需的所有工具。'
    },
    cta: {
      title: '準備開始您的遊戲開發之旅了嗎？',
      subtitle: '加入成千上萬已經在使用 VibeCoding 創建精彩遊戲的創作者。',
      createFirstGame: '創建您的第一個遊戲'
    }
  },
  gameStudio: {
    title: '遊戲工作室',
    untitledGame: '未命名遊戲',
    save: '保存',
    share: '分享',
    play: '播放',
    stop: '停止',
    blocks: '方塊',
    assets: '資源',
    preview: '預覽'
  },
  assetLibrary: {
    sprites: '精靈',
    sounds: '聲音',
    backgrounds: '背景',
    uploadAsset: '上傳資源',
    player: '玩家',
    enemy: '敵人',
    coin: '金幣',
    platform: '平台',
    heart: '心臟',
    star: '星星',
    jump: '跳躍',
    coinSound: '金幣',
    backgroundMusic: '背景音樂',
    gameOver: '遊戲結束',
    forest: '森林',
    space: '太空',
    desert: '沙漠',
    city: '城市'
  },
  userProfile: {
    myGames: '我的遊戲',
    likedGames: '喜歡的遊戲',
    achievements: '成就',
    gamesCreated: '已創建遊戲',
    totalPlays: '總遊玩次數',
    totalLikes: '總讚數',
    followers: '粉絲',
    following: '關注中',
    plays: '遊玩',
    likes: '讚'
  },
  achievements: {
    first_game: '首次創作',
    created_first_game: '創建了第一個遊戲',
    popular_creator: '人氣創作者',
    reached_1000_plays: '達到1000次遊玩',
    game_master: '遊戲大師',
    created_10_games: '創建了10個遊戲',
    community_favorite: '社區最愛',
    received_500_likes: '收到500個讚',
    educator: '教育者',
    created_5_educational_games: '創建了5個教育遊戲',
    speed_runner: '速戰速決',
    created_game_in_under_1_hour: '在1小時內創建遊戲'
  },
  common: {
    loading: '載入中...',
    error: '錯誤',
    success: '成功',
    cancel: '取消',
    confirm: '確認',
    back: '返回',
    next: '下一步',
    close: '關閉',
    open: '打開',
    edit: '編輯',
    delete: '刪除',
    add: '添加',
    remove: '移除',
    search: '搜尋',
    filter: '過濾',
    sort: '排序',
    save: '保存',
    share: '分享',
    joined: '加入',
    games: '遊戲',
    play_game: '遊玩遊戲',
    target_practice: '射擊練習',
    improve_your_aim: '提升你的準確度'
  }
};

// 英文翻譯（默認）
const enStrings: I18nStrings = {
  landing: {
    hero: {
      title: 'Create Games\nVisually',
      subtitle: 'VibeCoding makes game development accessible to everyone. Build amazing games with our intuitive visual coding interface - no programming experience required.',
      startCreating: 'Start Creating',
      exploreGames: 'Explore Games'
    },
    features: {
      visualCoding: {
        title: 'Visual Coding',
        description: 'Create games with drag-and-drop blocks, no coding experience required'
      },
      instantPreview: {
        title: 'Instant Preview',
        description: 'See your changes immediately as you build your game'
      },
      collaborate: {
        title: 'Collaborate',
        description: 'Work together with friends on amazing game projects'
      },
      sharePlay: {
        title: 'Share & Play',
        description: 'Share your creations with the world and play games by others'
      },
      sectionTitle: 'Everything You Need to Create Amazing Games',
      sectionSubtitle: 'From simple puzzles to complex adventures, our platform provides all the tools you need to bring your game ideas to life.'
    },
    cta: {
      title: 'Ready to Start Your Game Development Journey?',
      subtitle: 'Join thousands of creators who are already building amazing games with VibeCoding.',
      createFirstGame: 'Create Your First Game'
    }
  },
  gameStudio: {
    title: 'Game Studio',
    untitledGame: 'Untitled Game',
    save: 'Save',
    share: 'Share',
    play: 'Play',
    stop: 'Stop',
    blocks: 'Blocks',
    assets: 'Assets',
    preview: 'Preview'
  },
  assetLibrary: {
    sprites: 'Sprites',
    sounds: 'Sounds',
    backgrounds: 'Backgrounds',
    uploadAsset: 'Upload Asset',
    player: 'Player',
    enemy: 'Enemy',
    coin: 'Coin',
    platform: 'Platform',
    heart: 'Heart',
    star: 'Star',
    jump: 'Jump',
    coinSound: 'Coin',
    backgroundMusic: 'Background Music',
    gameOver: 'Game Over',
    forest: 'Forest',
    space: 'Space',
    desert: 'Desert',
    city: 'City'
  },
  userProfile: {
    myGames: 'My Games',
    likedGames: 'Liked Games',
    achievements: 'Achievements',
    gamesCreated: 'Games Created',
    totalPlays: 'Total Plays',
    totalLikes: 'Total Likes',
    followers: 'Followers',
    following: 'Following',
    plays: 'Plays',
    likes: 'Likes'
  },
  achievements: {
    first_game: 'First Game',
    created_first_game: 'Created First Game',
    popular_creator: 'Popular Creator',
    reached_1000_plays: 'Reached 1000 Plays',
    game_master: 'Game Master',
    created_10_games: 'Created 10 Games',
    community_favorite: 'Community Favorite',
    received_500_likes: 'Received 500 Likes',
    educator: 'Educator',
    created_5_educational_games: 'Created 5 Educational Games',
    speed_runner: 'Speed Runner',
    created_game_in_under_1_hour: 'Created Game in Under 1 Hour'
  },
  common: {
    loading: 'Loading...',
    error: 'Error',
    success: 'Success',
    cancel: 'Cancel',
    confirm: 'Confirm',
    back: 'Back',
    next: 'Next',
    close: 'Close',
    open: 'Open',
    edit: 'Edit',
    delete: 'Delete',
    add: 'Add',
    remove: 'Remove',
    search: 'Search',
    filter: 'Filter',
    sort: 'Sort',
    save: 'Save',
    share: 'Share',
    joined: 'Joined',
    games: 'Games',
    play_game: 'Play Game',
    target_practice: 'Target Practice',
    improve_your_aim: 'Improve Your Aim'
  }
};

// i18n Context
const I18nContext = createContext<I18nStrings>(zhStrings);

// 自定義 Hook
export const useI18n = () => {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error('useI18n must be used within an I18nProvider');
  }
  return context;
};

// 為了兼容性，也導出 useTranslation
export const useTranslation = () => {
  const strings = useI18n();

  const t = (key: string) => {
    const keys = key.split('.');
    let value: any = strings;

    for (const k of keys) {
      value = value?.[k];
    }

    return value || key;
  };

  return { t };
};

// Provider 組件
export const I18nProvider = ({ children }: { children: ReactNode }) => {
  return (
    <I18nContext.Provider value={zhStrings}>
      {children}
    </I18nContext.Provider>
  );
};
