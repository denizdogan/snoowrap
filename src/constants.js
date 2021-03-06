module.exports = {
  // SCREAMING_SNAKE_CASE MAKES EVERYTHING SEEM LIKE I'M SHOUTING AAAAAAAA
  MODULE_NAME: require('../package.json').name,
  VERSION: require('../package.json').version,
  ISSUE_REPORT_LINK: require('../package.json').bugs.url,
  DOCS_LINK: 'https://not-an-aardvark.github.io/snoowrap/',
  API_RULES_LINK: 'https://github.com/reddit/reddit/wiki/API',
  USER_KEYS: ['author', 'approved_by', 'banned_by'],
  SUBREDDIT_KEYS: ['subreddit', 'sr'],
  KINDS: {
    t1: 'Comment',
    t2: 'RedditUser',
    t3: 'Submission',
    t4: 'PrivateMessage',
    t5: 'Subreddit',
    t6: 'Trophy',
    t8: 'PromoCampaign',
    Listing: 'Listing',
    more: 'More',
    UserList: 'UserList',
    KarmaList: 'KarmaList',
    TrophyList: 'TrophyList',
    subreddit_settings: 'SubredditSettings',
    modaction: 'ModAction',
    wikipage: 'WikiPage',
    wikipagesettings: 'WikiPageSettings',
    wikipagelisting: 'WikiPageListing',
    LiveUpdateEvent: 'LiveThread',
    LiveUpdate: 'LiveUpdate',
    LabeledMulti: 'MultiReddit'
  },
  USERNAME_REGEX: /^[\w-]{1,20}$/,
  MODERATOR_PERMISSIONS: ['wiki', 'posts', 'access', 'mail', 'config', 'flair'],
  LIVETHREAD_PERMISSIONS: ['update', 'edit', 'manage'],
  HTTP_VERBS: ['delete', 'get', 'head', 'patch', 'post', 'put'],
  MAX_TOKEN_LATENCY: 10000,
  MAX_API_INFO_AMOUNT: 100, // the maximum number of items fetched from a request to the api/info endpoint
  MAX_API_MORECHILDREN_AMOUNT: 20, // the maximum number of items fetched from a request to the api/morechildren endpoint
  MAX_LISTING_ITEMS: 100
};
