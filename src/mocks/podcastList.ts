import keysToCamel from '~/utils/format/keysToCamel'

const podcastList = {
  feed: {
    author: {
      name: { label: 'iTunes Store' },
      uri: { label: 'http://www.apple.com/itunes/' }
    },
    entry: [
      {
        'im:name': { label: 'The Joe Budden Podcast' },
        'im:image': [
          {
            label:
              'https://is3-ssl.mzstatic.com/image/thumb/Podcasts113/v4/f2/21/fa/f221fabd-017f-5125-633b-f1fe4f39802a/mza_182995249085044287.jpg/55x55bb.png',
            attributes: { height: '55' }
          },
          {
            label:
              'https://is5-ssl.mzstatic.com/image/thumb/Podcasts113/v4/f2/21/fa/f221fabd-017f-5125-633b-f1fe4f39802a/mza_182995249085044287.jpg/60x60bb.png',
            attributes: { height: '60' }
          },
          {
            label:
              'https://is1-ssl.mzstatic.com/image/thumb/Podcasts113/v4/f2/21/fa/f221fabd-017f-5125-633b-f1fe4f39802a/mza_182995249085044287.jpg/170x170bb.png',
            attributes: { height: '170' }
          }
        ],
        summary: {
          label:
            'Tune into Joe Budden and his friends. Follow along the crazy adventures of these very random friends.'
        },
        'im:price': {
          label: 'Get',
          attributes: { amount: '0', currency: 'USD' }
        },
        'im:contentType': { attributes: { term: 'Podcast', label: 'Podcast' } },
        rights: { label: '© All rights reserved' },
        title: { label: 'The Joe Budden Podcast - The Joe Budden Network' },
        link: {
          attributes: {
            rel: 'alternate',
            type: 'text/html',
            href: 'https://podcasts.apple.com/us/podcast/the-joe-budden-podcast/id1535809341?uo=2'
          }
        },
        id: {
          label:
            'https://podcasts.apple.com/us/podcast/the-joe-budden-podcast/id1535809341?uo=2',
          attributes: { 'im:id': '1535809341' }
        },
        'im:artist': {
          label: 'The Joe Budden Network',
          attributes: {
            href: 'https://podcasts.apple.com/us/artist/the-joe-budden-network/1535844019?uo=2'
          }
        },
        category: {
          attributes: {
            'im:id': '1310',
            term: 'Music',
            scheme:
              'https://podcasts.apple.com/us/genre/podcasts-music/id1310?uo=2',
            label: 'Music'
          }
        },
        'im:releaseDate': {
          label: '2023-03-08T00:00:00-07:00',
          attributes: { label: 'March 8, 2023' }
        }
      },
      {
        'im:name': { label: 'Norah Jones Is Playing Along' },
        'im:image': [
          {
            label:
              'https://is1-ssl.mzstatic.com/image/thumb/Podcasts122/v4/45/d1/b6/45d1b677-8f9c-ff35-8c04-897a4de8b162/mza_9278186528825138026.jpg/55x55bb.png',
            attributes: { height: '55' }
          },
          {
            label:
              'https://is3-ssl.mzstatic.com/image/thumb/Podcasts122/v4/45/d1/b6/45d1b677-8f9c-ff35-8c04-897a4de8b162/mza_9278186528825138026.jpg/60x60bb.png',
            attributes: { height: '60' }
          },
          {
            label:
              'https://is4-ssl.mzstatic.com/image/thumb/Podcasts122/v4/45/d1/b6/45d1b677-8f9c-ff35-8c04-897a4de8b162/mza_9278186528825138026.jpg/170x170bb.png',
            attributes: { height: '170' }
          }
        ],
        summary: {
          label:
            'Norah Jones is a multi-GRAMMY winning singer and pianist who loves playing music with people, so she started her own podcast to do just that. Each episode, she sits down with a different guest for impromptu musical collaborations and candid conversation. Her guests come from all walks of life and every musical style and you never know where the songs will take them. So, come hang out in the studio. Norah Jones is Playing Along!'
        },
        'im:price': {
          label: 'Get',
          attributes: { amount: '0', currency: 'USD' }
        },
        'im:contentType': { attributes: { term: 'Podcast', label: 'Podcast' } },
        rights: { label: '© Gullible Jones, LLC 2022' },
        title: { label: 'Norah Jones Is Playing Along - Norah Jones' },
        link: {
          attributes: {
            rel: 'alternate',
            type: 'text/html',
            href: 'https://podcasts.apple.com/us/podcast/norah-jones-is-playing-along/id1645438817?uo=2'
          }
        },
        id: {
          label:
            'https://podcasts.apple.com/us/podcast/norah-jones-is-playing-along/id1645438817?uo=2',
          attributes: { 'im:id': '1645438817' }
        },
        'im:artist': { label: 'Norah Jones' },
        category: {
          attributes: {
            'im:id': '1525',
            term: 'Music Interviews',
            scheme:
              'https://podcasts.apple.com/us/genre/podcasts-music-music-interviews/id1525?uo=2',
            label: 'Music Interviews'
          }
        },
        'im:releaseDate': {
          label: '2023-02-13T21:00:00-07:00',
          attributes: { label: 'February 13, 2023' }
        }
      },
      {
        'im:name': { label: 'New Rory & MAL' },
        'im:image': [
          {
            label:
              'https://is4-ssl.mzstatic.com/image/thumb/Podcasts116/v4/e7/6e/57/e76e5713-cee0-f60d-9642-374050410d2b/mza_5035562531812198977.jpg/55x55bb.png',
            attributes: { height: '55' }
          },
          {
            label:
              'https://is1-ssl.mzstatic.com/image/thumb/Podcasts116/v4/e7/6e/57/e76e5713-cee0-f60d-9642-374050410d2b/mza_5035562531812198977.jpg/60x60bb.png',
            attributes: { height: '60' }
          },
          {
            label:
              'https://is4-ssl.mzstatic.com/image/thumb/Podcasts116/v4/e7/6e/57/e76e5713-cee0-f60d-9642-374050410d2b/mza_5035562531812198977.jpg/170x170bb.png',
            attributes: { height: '170' }
          }
        ],
        summary: {
          label:
            'New stories, new laughs, new random hot takes that no one asked for... New Rory & Mal.'
        },
        'im:price': {
          label: 'Get',
          attributes: { amount: '0', currency: 'USD' }
        },
        'im:contentType': { attributes: { term: 'Podcast', label: 'Podcast' } },
        rights: { label: '© All Rights Reserved' },
        title: { label: 'New Rory & MAL - Rory Farrell & Jamil "Mal" Clay' },
        link: {
          attributes: {
            rel: 'alternate',
            type: 'text/html',
            href: 'https://podcasts.apple.com/us/podcast/new-rory-mal/id1572182022?uo=2'
          }
        },
        id: {
          label:
            'https://podcasts.apple.com/us/podcast/new-rory-mal/id1572182022?uo=2',
          attributes: { 'im:id': '1572182022' }
        },
        'im:artist': { label: 'Rory Farrell & Jamil "Mal" Clay' },
        category: {
          attributes: {
            'im:id': '1310',
            term: 'Music',
            scheme:
              'https://podcasts.apple.com/us/genre/podcasts-music/id1310?uo=2',
            label: 'Music'
          }
        },
        'im:releaseDate': {
          label: '2023-03-03T01:00:00-07:00',
          attributes: { label: 'March 3, 2023' }
        }
      },
      {
        'im:name': { label: 'Million Dollaz Worth Of Game' },
        'im:image': [
          {
            label:
              'https://is1-ssl.mzstatic.com/image/thumb/Podcasts125/v4/7b/cf/f6/7bcff6bb-5f99-6c2f-c6c5-3a9799f3df21/mza_8544742664200824246.jpg/55x55bb.png',
            attributes: { height: '55' }
          },
          {
            label:
              'https://is3-ssl.mzstatic.com/image/thumb/Podcasts125/v4/7b/cf/f6/7bcff6bb-5f99-6c2f-c6c5-3a9799f3df21/mza_8544742664200824246.jpg/60x60bb.png',
            attributes: { height: '60' }
          },
          {
            label:
              'https://is2-ssl.mzstatic.com/image/thumb/Podcasts125/v4/7b/cf/f6/7bcff6bb-5f99-6c2f-c6c5-3a9799f3df21/mza_8544742664200824246.jpg/170x170bb.png',
            attributes: { height: '170' }
          }
        ],
        summary: {
          label:
            'The Million Dollaz Worth of Game show, a weekly podcast with rapper/actor @GillieDaKing and social media influencer and disruptor @Wallo267 - The perfect blend of discussing music, real life issues, personal experiences, honest advice and comedy\n\nYou can find every episode of this show on Apple Podcasts, Spotify or YouTube. Prime Members can listen ad-free on Amazon Music. For more, visit barstool.link/mworthofgame'
        },
        'im:price': {
          label: 'Get',
          attributes: { amount: '0', currency: 'USD' }
        },
        'im:contentType': { attributes: { term: 'Podcast', label: 'Podcast' } },
        rights: { label: '© 2023 Barstool Sports, Inc.' },
        title: { label: 'Million Dollaz Worth Of Game - Barstool Sports' },
        link: {
          attributes: {
            rel: 'alternate',
            type: 'text/html',
            href: 'https://podcasts.apple.com/us/podcast/million-dollaz-worth-of-game/id1460157002?uo=2'
          }
        },
        id: {
          label:
            'https://podcasts.apple.com/us/podcast/million-dollaz-worth-of-game/id1460157002?uo=2',
          attributes: { 'im:id': '1460157002' }
        },
        'im:artist': {
          label: 'Barstool Sports',
          attributes: {
            href: 'https://podcasts.apple.com/us/artist/barstool-sports/1524874689?uo=2'
          }
        },
        category: {
          attributes: {
            'im:id': '1523',
            term: 'Music Commentary',
            scheme:
              'https://podcasts.apple.com/us/genre/podcasts-music-music-commentary/id1523?uo=2',
            label: 'Music Commentary'
          }
        },
        'im:releaseDate': {
          label: '2023-02-24T16:30:00-07:00',
          attributes: { label: 'February 24, 2023' }
        }
      },
      {
        'im:name': { label: '"See, The Thing Is..."' },
        'im:image': [
          {
            label:
              'https://is5-ssl.mzstatic.com/image/thumb/Podcasts112/v4/9f/fb/91/9ffb916a-af0d-0fb8-3646-57eeda5314c3/mza_945735870779170317.jpeg/55x55bb.png',
            attributes: { height: '55' }
          },
          {
            label:
              'https://is2-ssl.mzstatic.com/image/thumb/Podcasts112/v4/9f/fb/91/9ffb916a-af0d-0fb8-3646-57eeda5314c3/mza_945735870779170317.jpeg/60x60bb.png',
            attributes: { height: '60' }
          },
          {
            label:
              'https://is1-ssl.mzstatic.com/image/thumb/Podcasts112/v4/9f/fb/91/9ffb916a-af0d-0fb8-3646-57eeda5314c3/mza_945735870779170317.jpeg/170x170bb.png',
            attributes: { height: '170' }
          }
        ],
        summary: {
          label:
            'Opinionated & informative with a taste of toxic: join Bridget Kelly & Mandii B every Tuesday for all things pop culture, music, and media through the minds of women.'
        },
        'im:price': {
          label: 'Get',
          attributes: { amount: '0', currency: 'USD' }
        },
        'im:contentType': { attributes: { term: 'Podcast', label: 'Podcast' } },
        rights: { label: '© 2022' },
        title: { label: '"See, The Thing Is..." - All The Things Productions' },
        link: {
          attributes: {
            rel: 'alternate',
            type: 'text/html',
            href: 'https://podcasts.apple.com/us/podcast/see-the-thing-is/id1534096260?uo=2'
          }
        },
        id: {
          label:
            'https://podcasts.apple.com/us/podcast/see-the-thing-is/id1534096260?uo=2',
          attributes: { 'im:id': '1534096260' }
        },
        'im:artist': { label: 'All The Things Productions' },
        category: {
          attributes: {
            'im:id': '1523',
            term: 'Music Commentary',
            scheme:
              'https://podcasts.apple.com/us/genre/podcasts-music-music-commentary/id1523?uo=2',
            label: 'Music Commentary'
          }
        },
        'im:releaseDate': {
          label: '2023-03-03T00:50:00-07:00',
          attributes: { label: 'March 3, 2023' }
        }
      },
      {
        'im:name': { label: 'Drink Champs' },
        'im:image': [
          {
            label:
              'https://is4-ssl.mzstatic.com/image/thumb/Podcasts113/v4/46/39/69/46396977-6d87-f120-6432-6373dcefdf9b/mza_6589930413574180525.jpg/55x55bb.png',
            attributes: { height: '55' }
          },
          {
            label:
              'https://is1-ssl.mzstatic.com/image/thumb/Podcasts113/v4/46/39/69/46396977-6d87-f120-6432-6373dcefdf9b/mza_6589930413574180525.jpg/60x60bb.png',
            attributes: { height: '60' }
          },
          {
            label:
              'https://is4-ssl.mzstatic.com/image/thumb/Podcasts113/v4/46/39/69/46396977-6d87-f120-6432-6373dcefdf9b/mza_6589930413574180525.jpg/170x170bb.png',
            attributes: { height: '170' }
          }
        ],
        summary: {
          label:
            'Legendary Queens rapper-turned show host N.O.R.E. teams up with Miami hip-hop pioneer DJ EFN for a night of boozy conversation and boisterous storytelling. The hosts and guests engage together in fun, light-hearted conversation - looking back at their paths to success, highlighting their lives, friendships, and iconic moments within their career. In this unfiltered series, drinks are flowing and jokes are rolling - take a seat at the table with N.O.R.E & EFN. You Gotta Relax!'
        },
        'im:price': {
          label: 'Get',
          attributes: { amount: '0', currency: 'USD' }
        },
        'im:contentType': { attributes: { term: 'Podcast', label: 'Podcast' } },
        rights: { label: '© 2023 Interval Presents' },
        title: { label: 'Drink Champs - Interval Presents' },
        link: {
          attributes: {
            rel: 'alternate',
            type: 'text/html',
            href: 'https://podcasts.apple.com/us/podcast/drink-champs/id1096830182?uo=2'
          }
        },
        id: {
          label:
            'https://podcasts.apple.com/us/podcast/drink-champs/id1096830182?uo=2',
          attributes: { 'im:id': '1096830182' }
        },
        'im:artist': {
          label: 'Interval Presents',
          attributes: {
            href: 'https://podcasts.apple.com/us/artist/iheartradio/284341002?uo=2'
          }
        },
        category: {
          attributes: {
            'im:id': '1310',
            term: 'Music',
            scheme:
              'https://podcasts.apple.com/us/genre/podcasts-music/id1310?uo=2',
            label: 'Music'
          }
        },
        'im:releaseDate': {
          label: '2023-02-24T00:00:00-07:00',
          attributes: { label: 'February 24, 2023' }
        }
      },
      {
        'im:name': { label: 'Way Up With Angela Yee' },
        'im:price': {
          label: 'Get',
          attributes: { amount: '0', currency: 'USD' }
        },
        'im:image': [
          {
            label:
              'https://is5-ssl.mzstatic.com/image/thumb/Podcasts116/v4/36/4e/67/364e6744-ef39-2bef-d07c-5cd4340eb6ae/mza_17670679045660297136.jpg/55x55bb.png',
            attributes: { height: '55' }
          },
          {
            label:
              'https://is2-ssl.mzstatic.com/image/thumb/Podcasts116/v4/36/4e/67/364e6744-ef39-2bef-d07c-5cd4340eb6ae/mza_17670679045660297136.jpg/60x60bb.png',
            attributes: { height: '60' }
          },
          {
            label:
              'https://is4-ssl.mzstatic.com/image/thumb/Podcasts116/v4/36/4e/67/364e6744-ef39-2bef-d07c-5cd4340eb6ae/mza_17670679045660297136.jpg/170x170bb.png',
            attributes: { height: '170' }
          }
        ],
        summary: { label: 'Way Up With Angela Yee On Demand!' },
        'im:artist': { label: 'iHeartPodcasts' },
        title: { label: 'Way Up With Angela Yee - iHeartPodcasts' },
        link: {
          attributes: {
            rel: 'alternate',
            type: 'text/html',
            href: 'https://podcasts.apple.com/us/podcast/way-up-with-angela-yee/id1670193102?uo=2'
          }
        },
        id: {
          label:
            'https://podcasts.apple.com/us/podcast/way-up-with-angela-yee/id1670193102?uo=2',
          attributes: { 'im:id': '1670193102' }
        },
        'im:contentType': { attributes: { term: 'Podcast', label: 'Podcast' } },
        category: {
          attributes: {
            'im:id': '1525',
            term: 'Music Interviews',
            scheme:
              'https://podcasts.apple.com/us/genre/podcasts-music-music-interviews/id1525?uo=2',
            label: 'Music Interviews'
          }
        },
        'im:releaseDate': {
          label: '2023-03-07T13:04:00-07:00',
          attributes: { label: 'March 7, 2023' }
        }
      },
      {
        'im:name': { label: 'DISGRACELAND' },
        'im:image': [
          {
            label:
              'https://is5-ssl.mzstatic.com/image/thumb/Podcasts123/v4/9b/56/5c/9b565c54-ffd7-be9d-ff96-be60e36ae59a/mza_14743797108223744429.jpeg/55x55bb.png',
            attributes: { height: '55' }
          },
          {
            label:
              'https://is2-ssl.mzstatic.com/image/thumb/Podcasts123/v4/9b/56/5c/9b565c54-ffd7-be9d-ff96-be60e36ae59a/mza_14743797108223744429.jpeg/60x60bb.png',
            attributes: { height: '60' }
          },
          {
            label:
              'https://is4-ssl.mzstatic.com/image/thumb/Podcasts123/v4/9b/56/5c/9b565c54-ffd7-be9d-ff96-be60e36ae59a/mza_14743797108223744429.jpeg/170x170bb.png',
            attributes: { height: '170' }
          }
        ],
        summary: {
          label:
            'Disgraceland is the award winning music podcast hosted by Jake Brennan that explores the alleged true crime antics and criminal connections of musicians we love like Jerry Lee Lewis, the Rolling Stones, Taylor Swift, David Bowie, Cardi B, the Grateful Dead, Amy Winehouse, Bob Marley, and more. Disgraceland is a scripted, single voice narrative storytelling podcast that melds true crime, music history, mystery, and misadventure. Disgraceland is not a journalistic podcast. It is an entertainment podcast inspired by true events. Certain dialogue and scenes are sometimes fictionalized for dramatic purposes as they are in most scripted entertainment based on true events. Sources and credits for each episode are available at disgracelandpod.com. Full scripted episodes are released every Tuesday. Bonus “After Party” episodes are released every Thursday. Disgraceland is available wherever you get your podcasts.'
        },
        'im:price': {
          label: 'Get',
          attributes: { amount: '0', currency: 'USD' }
        },
        'im:contentType': { attributes: { term: 'Podcast', label: 'Podcast' } },
        rights: { label: '© Double Elvis' },
        title: { label: 'DISGRACELAND - Double Elvis' },
        link: {
          attributes: {
            rel: 'alternate',
            type: 'text/html',
            href: 'https://podcasts.apple.com/us/podcast/disgraceland/id1275172907?uo=2'
          }
        },
        id: {
          label:
            'https://podcasts.apple.com/us/podcast/disgraceland/id1275172907?uo=2',
          attributes: { 'im:id': '1275172907' }
        },
        'im:artist': { label: 'Double Elvis' },
        category: {
          attributes: {
            'im:id': '1310',
            term: 'Music',
            scheme:
              'https://podcasts.apple.com/us/genre/podcasts-music/id1310?uo=2',
            label: 'Music'
          }
        },
        'im:releaseDate': {
          label: '2023-03-07T00:04:00-07:00',
          attributes: { label: 'March 7, 2023' }
        }
      },
      {
        'im:name': { label: 'Frosted Tips with Lance Bass' },
        'im:image': [
          {
            label:
              'https://is2-ssl.mzstatic.com/image/thumb/Podcasts113/v4/07/88/b3/0788b35f-1829-6fbd-2488-ecaf83b8d8ab/mza_9852863690630397024.jpg/55x55bb.png',
            attributes: { height: '55' }
          },
          {
            label:
              'https://is4-ssl.mzstatic.com/image/thumb/Podcasts113/v4/07/88/b3/0788b35f-1829-6fbd-2488-ecaf83b8d8ab/mza_9852863690630397024.jpg/60x60bb.png',
            attributes: { height: '60' }
          },
          {
            label:
              'https://is3-ssl.mzstatic.com/image/thumb/Podcasts113/v4/07/88/b3/0788b35f-1829-6fbd-2488-ecaf83b8d8ab/mza_9852863690630397024.jpg/170x170bb.png',
            attributes: { height: '170' }
          }
        ],
        summary: {
          label:
            "Their ballads and bops got you through your teenage years...now let your favorite boy bands guide you through adulting! \n\n\n\nThe ultimate boy-bander and host Lance Bass will help us we navigate the ups and downs of parenting, marriage, and everything in between.\n\n\n\nEach week, Lance Bass and his husband Michael will be joined by our biggest boy band crushes!\n\n\n\nStep-by-step...we will relive decades of Boy Band nostalgia by chatting with your all-time faves each week. \n\nFrom New Kids to B-S-B to 98 degrees...and of course, NSYNC....no boy band left behind!!\n\n\n\nSo let's go in One Direction and have some fun...because we should never have to say Bye, Bye, Bye when you got The Right Stuff! "
        },
        'im:price': {
          label: 'Get',
          attributes: { amount: '0', currency: 'USD' }
        },
        'im:contentType': { attributes: { term: 'Podcast', label: 'Podcast' } },
        rights: { label: '© 2023 iHeartPodcasts' },
        title: { label: 'Frosted Tips with Lance Bass - iHeartPodcasts' },
        link: {
          attributes: {
            rel: 'alternate',
            type: 'text/html',
            href: 'https://podcasts.apple.com/us/podcast/frosted-tips-with-lance-bass/id1661154206?uo=2'
          }
        },
        id: {
          label:
            'https://podcasts.apple.com/us/podcast/frosted-tips-with-lance-bass/id1661154206?uo=2',
          attributes: { 'im:id': '1661154206' }
        },
        'im:artist': { label: 'iHeartPodcasts' },
        category: {
          attributes: {
            'im:id': '1310',
            term: 'Music',
            scheme:
              'https://podcasts.apple.com/us/genre/podcasts-music/id1310?uo=2',
            label: 'Music'
          }
        },
        'im:releaseDate': {
          label: '2023-02-26T21:00:00-07:00',
          attributes: { label: 'February 26, 2023' }
        }
      },
      {
        'im:name': { label: 'Ebro in the Morning Podcast' },
        'im:price': {
          label: 'Get',
          attributes: { amount: '0', currency: 'USD' }
        },
        'im:image': [
          {
            label:
              'https://is5-ssl.mzstatic.com/image/thumb/Podcasts122/v4/0f/95/2b/0f952b75-2da3-a1a4-55ee-5e24eb34a2ed/mza_16604615367747989507.jpg/55x55bb.png',
            attributes: { height: '55' }
          },
          {
            label:
              'https://is2-ssl.mzstatic.com/image/thumb/Podcasts122/v4/0f/95/2b/0f952b75-2da3-a1a4-55ee-5e24eb34a2ed/mza_16604615367747989507.jpg/60x60bb.png',
            attributes: { height: '60' }
          },
          {
            label:
              'https://is2-ssl.mzstatic.com/image/thumb/Podcasts122/v4/0f/95/2b/0f952b75-2da3-a1a4-55ee-5e24eb34a2ed/mza_16604615367747989507.jpg/170x170bb.png',
            attributes: { height: '170' }
          }
        ],
        summary: {
          label:
            'Ebro, Laura Stylez and Rosenberg share their thoughts on everything from music, relationships, politics and more Monday - Friday 5am - 10am ET.'
        },
        'im:artist': { label: "HOT 97's Ebro in the Morning" },
        title: {
          label: "Ebro in the Morning Podcast - HOT 97's Ebro in the Morning"
        },
        link: {
          attributes: {
            rel: 'alternate',
            type: 'text/html',
            href: 'https://podcasts.apple.com/us/podcast/ebro-in-the-morning-podcast/id1236941416?uo=2'
          }
        },
        id: {
          label:
            'https://podcasts.apple.com/us/podcast/ebro-in-the-morning-podcast/id1236941416?uo=2',
          attributes: { 'im:id': '1236941416' }
        },
        'im:contentType': { attributes: { term: 'Podcast', label: 'Podcast' } },
        category: {
          attributes: {
            'im:id': '1310',
            term: 'Music',
            scheme:
              'https://podcasts.apple.com/us/genre/podcasts-music/id1310?uo=2',
            label: 'Music'
          }
        },
        'im:releaseDate': {
          label: '2023-03-07T08:33:00-07:00',
          attributes: { label: 'March 7, 2023' }
        }
      },
      {
        'im:name': { label: 'A History of Rock Music in 500 Songs' },
        'im:image': [
          {
            label:
              'https://is5-ssl.mzstatic.com/image/thumb/Podcasts124/v4/88/18/59/881859a5-f344-c249-f4b9-3d9b62add05a/mza_16428964146354887078.png/55x55bb.png',
            attributes: { height: '55' }
          },
          {
            label:
              'https://is4-ssl.mzstatic.com/image/thumb/Podcasts124/v4/88/18/59/881859a5-f344-c249-f4b9-3d9b62add05a/mza_16428964146354887078.png/60x60bb.png',
            attributes: { height: '60' }
          },
          {
            label:
              'https://is3-ssl.mzstatic.com/image/thumb/Podcasts124/v4/88/18/59/881859a5-f344-c249-f4b9-3d9b62add05a/mza_16428964146354887078.png/170x170bb.png',
            attributes: { height: '170' }
          }
        ],
        summary: {
          label:
            'Andrew Hickey presents a history of rock music from 1938 to 1999, looking at five hundred songs that shaped the genre.'
        },
        'im:price': {
          label: 'Get',
          attributes: { amount: '0', currency: 'USD' }
        },
        'im:contentType': { attributes: { term: 'Podcast', label: 'Podcast' } },
        rights: { label: '© 2021 A History of Rock Music in 500 Songs' },
        title: {
          label: 'A History of Rock Music in 500 Songs - Andrew Hickey'
        },
        link: {
          attributes: {
            rel: 'alternate',
            type: 'text/html',
            href: 'https://podcasts.apple.com/us/podcast/a-history-of-rock-music-in-500-songs/id1437402802?uo=2'
          }
        },
        id: {
          label:
            'https://podcasts.apple.com/us/podcast/a-history-of-rock-music-in-500-songs/id1437402802?uo=2',
          attributes: { 'im:id': '1437402802' }
        },
        'im:artist': { label: 'Andrew Hickey' },
        category: {
          attributes: {
            'im:id': '1524',
            term: 'Music History',
            scheme:
              'https://podcasts.apple.com/us/genre/podcasts-music-music-history/id1524?uo=2',
            label: 'Music History'
          }
        },
        'im:releaseDate': {
          label: '2023-02-21T16:48:00-07:00',
          attributes: { label: 'February 21, 2023' }
        }
      },
      {
        'im:name': {
          label:
            'Broken Record with Rick Rubin, Malcolm Gladwell, Bruce Headlam and Justin Richmond'
        },
        'im:image': [
          {
            label:
              'https://is3-ssl.mzstatic.com/image/thumb/Podcasts112/v4/7b/12/d5/7b12d5ec-7264-6693-8a8e-e6b414a783c3/mza_10388338206053029687.jpg/55x55bb.png',
            attributes: { height: '55' }
          },
          {
            label:
              'https://is5-ssl.mzstatic.com/image/thumb/Podcasts112/v4/7b/12/d5/7b12d5ec-7264-6693-8a8e-e6b414a783c3/mza_10388338206053029687.jpg/60x60bb.png',
            attributes: { height: '60' }
          },
          {
            label:
              'https://is4-ssl.mzstatic.com/image/thumb/Podcasts112/v4/7b/12/d5/7b12d5ec-7264-6693-8a8e-e6b414a783c3/mza_10388338206053029687.jpg/170x170bb.png',
            attributes: { height: '170' }
          }
        ],
        summary: {
          label:
            'From Rick Rubin, Malcolm Gladwell, Bruce Headlam, and Justin Richmond. The musicians you love talk about their life, inspiration, and craft. Then play. iHeartMedia is the exclusive podcast partner of Pushkin Industries.'
        },
        'im:price': {
          label: 'Get',
          attributes: { amount: '0', currency: 'USD' }
        },
        'im:contentType': { attributes: { term: 'Podcast', label: 'Podcast' } },
        rights: { label: '© 2023 Pushkin Industries 2023' },
        title: {
          label:
            'Broken Record with Rick Rubin, Malcolm Gladwell, Bruce Headlam and Justin Richmond - Pushkin Industries'
        },
        link: {
          attributes: {
            rel: 'alternate',
            type: 'text/html',
            href: 'https://podcasts.apple.com/us/podcast/broken-record-with-rick-rubin-malcolm-gladwell-bruce/id1311004083?uo=2'
          }
        },
        id: {
          label:
            'https://podcasts.apple.com/us/podcast/broken-record-with-rick-rubin-malcolm-gladwell-bruce/id1311004083?uo=2',
          attributes: { 'im:id': '1311004083' }
        },
        'im:artist': {
          label: 'Pushkin Industries',
          attributes: {
            href: 'https://podcasts.apple.com/us/artist/pushkin-industries/1465988663?uo=2'
          }
        },
        category: {
          attributes: {
            'im:id': '1310',
            term: 'Music',
            scheme:
              'https://podcasts.apple.com/us/genre/podcasts-music/id1310?uo=2',
            label: 'Music'
          }
        },
        'im:releaseDate': {
          label: '2023-02-26T21:00:00-07:00',
          attributes: { label: 'February 26, 2023' }
        }
      },
      {
        'im:name': { label: 'No Jumper' },
        'im:image': [
          {
            label:
              'https://is5-ssl.mzstatic.com/image/thumb/Podcasts112/v4/55/3e/bc/553ebc1f-75e1-6c3e-c9a3-de3bfc0a11e0/mza_11110635484606225985.png/55x55bb.png',
            attributes: { height: '55' }
          },
          {
            label:
              'https://is2-ssl.mzstatic.com/image/thumb/Podcasts112/v4/55/3e/bc/553ebc1f-75e1-6c3e-c9a3-de3bfc0a11e0/mza_11110635484606225985.png/60x60bb.png',
            attributes: { height: '60' }
          },
          {
            label:
              'https://is1-ssl.mzstatic.com/image/thumb/Podcasts112/v4/55/3e/bc/553ebc1f-75e1-6c3e-c9a3-de3bfc0a11e0/mza_11110635484606225985.png/170x170bb.png',
            attributes: { height: '170' }
          }
        ],
        summary: {
          label:
            'The Coolest Podcast In The World. Hosted by Adam22 Watch these interviews on YouTube right here: https://www.youtube.com/nojumper'
        },
        'im:price': {
          label: 'Get',
          attributes: { amount: '0', currency: 'USD' }
        },
        'im:contentType': { attributes: { term: 'Podcast', label: 'Podcast' } },
        rights: { label: '© All rights reserved' },
        title: { label: 'No Jumper - No Jumper' },
        link: {
          attributes: {
            rel: 'alternate',
            type: 'text/html',
            href: 'https://podcasts.apple.com/us/podcast/no-jumper/id1001659715?uo=2'
          }
        },
        id: {
          label:
            'https://podcasts.apple.com/us/podcast/no-jumper/id1001659715?uo=2',
          attributes: { 'im:id': '1001659715' }
        },
        'im:artist': { label: 'No Jumper' },
        category: {
          attributes: {
            'im:id': '1525',
            term: 'Music Interviews',
            scheme:
              'https://podcasts.apple.com/us/genre/podcasts-music-music-interviews/id1525?uo=2',
            label: 'Music Interviews'
          }
        },
        'im:releaseDate': {
          label: '2023-03-07T12:29:00-07:00',
          attributes: { label: 'March 7, 2023' }
        }
      },
      {
        'im:name': { label: "60 Songs That Explain the '90s" },
        'im:image': [
          {
            label:
              'https://is4-ssl.mzstatic.com/image/thumb/Podcasts112/v4/f4/53/be/f453be7f-2a34-0617-7bc1-bc57d9b747fc/mza_6548891788110664288.jpg/55x55bb.png',
            attributes: { height: '55' }
          },
          {
            label:
              'https://is3-ssl.mzstatic.com/image/thumb/Podcasts112/v4/f4/53/be/f453be7f-2a34-0617-7bc1-bc57d9b747fc/mza_6548891788110664288.jpg/60x60bb.png',
            attributes: { height: '60' }
          },
          {
            label:
              'https://is1-ssl.mzstatic.com/image/thumb/Podcasts112/v4/f4/53/be/f453be7f-2a34-0617-7bc1-bc57d9b747fc/mza_6548891788110664288.jpg/170x170bb.png',
            attributes: { height: '170' }
          }
        ],
        summary: {
          label:
            'The 1990s were a turning point in music: with the increasingly connected world enabling an unprecedented coalescence of various styles and genres, the decade featured the rapid evolution of sonic artistry — and subsequently shaped the soundscape of eras that followed. Listen along as The Ringer’s preeminent music critic Rob Harvilla curates and explores 60 iconic songs from the ‘90s that define the decade.'
        },
        'im:price': {
          label: 'Get',
          attributes: { amount: '0', currency: 'USD' }
        },
        'im:contentType': { attributes: { term: 'Podcast', label: 'Podcast' } },
        rights: { label: '© All rights reserved.' },
        title: { label: "60 Songs That Explain the '90s - The Ringer" },
        link: {
          attributes: {
            rel: 'alternate',
            type: 'text/html',
            href: 'https://podcasts.apple.com/us/podcast/60-songs-that-explain-the-90s/id1635211340?uo=2'
          }
        },
        id: {
          label:
            'https://podcasts.apple.com/us/podcast/60-songs-that-explain-the-90s/id1635211340?uo=2',
          attributes: { 'im:id': '1635211340' }
        },
        'im:artist': { label: 'The Ringer' },
        category: {
          attributes: {
            'im:id': '1310',
            term: 'Music',
            scheme:
              'https://podcasts.apple.com/us/genre/podcasts-music/id1310?uo=2',
            label: 'Music'
          }
        },
        'im:releaseDate': {
          label: '2023-02-15T00:00:00-07:00',
          attributes: { label: 'February 15, 2023' }
        }
      },
      {
        'im:name': { label: 'All Songs Considered' },
        'im:image': [
          {
            label:
              'https://is2-ssl.mzstatic.com/image/thumb/Podcasts112/v4/e0/23/89/e02389cc-b29e-5e66-78b4-f8374c04a62a/mza_10797489632095477943.jpg/55x55bb.png',
            attributes: { height: '55' }
          },
          {
            label:
              'https://is4-ssl.mzstatic.com/image/thumb/Podcasts112/v4/e0/23/89/e02389cc-b29e-5e66-78b4-f8374c04a62a/mza_10797489632095477943.jpg/60x60bb.png',
            attributes: { height: '60' }
          },
          {
            label:
              'https://is4-ssl.mzstatic.com/image/thumb/Podcasts112/v4/e0/23/89/e02389cc-b29e-5e66-78b4-f8374c04a62a/mza_10797489632095477943.jpg/170x170bb.png',
            attributes: { height: '170' }
          }
        ],
        summary: {
          label:
            "Hosts/nerds Bob Boilen and Robin Hilton are your friendly music buddies with the week's best new music discoveries, including conversations with emerging artists, icons and more. Hear songs that can completely change your day, with humor, heart and (sometimes) a whole lot of noise. Directions for use: Morning commute, the gym, or alone time. (If rash persists, discontinue use.)"
        },
        'im:price': {
          label: 'Get',
          attributes: { amount: '0', currency: 'USD' }
        },
        'im:contentType': { attributes: { term: 'Podcast', label: 'Podcast' } },
        rights: { label: '© Copyright 2011-2021 NPR - For Personal Use Only' },
        title: { label: 'All Songs Considered - NPR' },
        link: {
          attributes: {
            rel: 'alternate',
            type: 'text/html',
            href: 'https://podcasts.apple.com/us/podcast/all-songs-considered/id79687345?uo=2'
          }
        },
        id: {
          label:
            'https://podcasts.apple.com/us/podcast/all-songs-considered/id79687345?uo=2',
          attributes: { 'im:id': '79687345' }
        },
        'im:artist': {
          label: 'NPR',
          attributes: {
            href: 'https://podcasts.apple.com/us/artist/npr/125443881?uo=2'
          }
        },
        category: {
          attributes: {
            'im:id': '1310',
            term: 'Music',
            scheme:
              'https://podcasts.apple.com/us/genre/podcasts-music/id1310?uo=2',
            label: 'Music'
          }
        },
        'im:releaseDate': {
          label: '2023-03-03T02:00:00-07:00',
          attributes: { label: 'March 3, 2023' }
        }
      },
      {
        'im:name': { label: 'Exit 209 with Storme Warren' },
        'im:image': [
          {
            label:
              'https://is3-ssl.mzstatic.com/image/thumb/Podcasts122/v4/c0/ee/75/c0ee7521-a506-e4f6-0681-05f95039fdee/mza_7766525557276578105.jpg/55x55bb.png',
            attributes: { height: '55' }
          },
          {
            label:
              'https://is5-ssl.mzstatic.com/image/thumb/Podcasts122/v4/c0/ee/75/c0ee7521-a506-e4f6-0681-05f95039fdee/mza_7766525557276578105.jpg/60x60bb.png',
            attributes: { height: '60' }
          },
          {
            label:
              'https://is2-ssl.mzstatic.com/image/thumb/Podcasts122/v4/c0/ee/75/c0ee7521-a506-e4f6-0681-05f95039fdee/mza_7766525557276578105.jpg/170x170bb.png',
            attributes: { height: '170' }
          }
        ],
        summary: {
          label:
            "SiriusXM's Storme Warren dives into the very beginnings of country music's biggest stars. From the key moment they took the famous \"Exit 209\" off I-40 into the heart of Nashville's legendary honky-tonks...to having their first bonafide hit record. Find out where today's country music hitmakers first lived, their not so glitzy first jobs in town, how many times they were told “no,” and most importantly – the incredible stories of how they powered through it all."
        },
        'im:price': {
          label: 'Get',
          attributes: { amount: '0', currency: 'USD' }
        },
        'im:contentType': { attributes: { term: 'Podcast', label: 'Podcast' } },
        rights: { label: '© Copyright 2022 SiriusXM' },
        title: { label: 'Exit 209 with Storme Warren - SiriusXM' },
        link: {
          attributes: {
            rel: 'alternate',
            type: 'text/html',
            href: 'https://podcasts.apple.com/us/podcast/exit-209-with-storme-warren/id1653788476?uo=2'
          }
        },
        id: {
          label:
            'https://podcasts.apple.com/us/podcast/exit-209-with-storme-warren/id1653788476?uo=2',
          attributes: { 'im:id': '1653788476' }
        },
        'im:artist': { label: 'SiriusXM' },
        category: {
          attributes: {
            'im:id': '1525',
            term: 'Music Interviews',
            scheme:
              'https://podcasts.apple.com/us/genre/podcasts-music-music-interviews/id1525?uo=2',
            label: 'Music Interviews'
          }
        },
        'im:releaseDate': {
          label: '2023-02-24T00:00:00-07:00',
          attributes: { label: 'February 24, 2023' }
        }
      },
      {
        'im:name': { label: 'Bobbycast' },
        'im:image': [
          {
            label:
              'https://is4-ssl.mzstatic.com/image/thumb/Podcasts116/v4/03/eb/e2/03ebe2dc-370c-d3d1-1061-40110d2431ec/mza_15927749670995879775.jpg/55x55bb.png',
            attributes: { height: '55' }
          },
          {
            label:
              'https://is1-ssl.mzstatic.com/image/thumb/Podcasts116/v4/03/eb/e2/03ebe2dc-370c-d3d1-1061-40110d2431ec/mza_15927749670995879775.jpg/60x60bb.png',
            attributes: { height: '60' }
          },
          {
            label:
              'https://is3-ssl.mzstatic.com/image/thumb/Podcasts116/v4/03/eb/e2/03ebe2dc-370c-d3d1-1061-40110d2431ec/mza_15927749670995879775.jpg/170x170bb.png',
            attributes: { height: '170' }
          }
        ],
        summary: {
          label:
            'A show Bobby Bones does from his house. In-depth interviews with songwriters, producers and artists in Nashville that reveal the stories behind the biggest songs, candid anecdotes and personal stories.'
        },
        'im:price': {
          label: 'Get',
          attributes: { amount: '0', currency: 'USD' }
        },
        'im:contentType': { attributes: { term: 'Podcast', label: 'Podcast' } },
        rights: { label: '© 2023 Nashville Podcast Network' },
        title: { label: 'Bobbycast - Nashville Podcast Network' },
        link: {
          attributes: {
            rel: 'alternate',
            type: 'text/html',
            href: 'https://podcasts.apple.com/us/podcast/bobbycast/id1220200987?uo=2'
          }
        },
        id: {
          label:
            'https://podcasts.apple.com/us/podcast/bobbycast/id1220200987?uo=2',
          attributes: { 'im:id': '1220200987' }
        },
        'im:artist': {
          label: 'Nashville Podcast Network',
          attributes: {
            href: 'https://podcasts.apple.com/us/artist/nashville-podcast-network/1461906654?uo=2'
          }
        },
        category: {
          attributes: {
            'im:id': '1310',
            term: 'Music',
            scheme:
              'https://podcasts.apple.com/us/genre/podcasts-music/id1310?uo=2',
            label: 'Music'
          }
        },
        'im:releaseDate': {
          label: '2023-03-01T22:05:00-07:00',
          attributes: { label: 'March 1, 2023' }
        }
      },
      {
        'im:name': { label: "Here's The Thing with Alec Baldwin" },
        'im:image': [
          {
            label:
              'https://is5-ssl.mzstatic.com/image/thumb/Podcasts126/v4/c0/59/78/c05978e9-ced9-2d1f-b45c-0d3d229a0f5a/mza_15253999773912500974.jpg/55x55bb.png',
            attributes: { height: '55' }
          },
          {
            label:
              'https://is2-ssl.mzstatic.com/image/thumb/Podcasts126/v4/c0/59/78/c05978e9-ced9-2d1f-b45c-0d3d229a0f5a/mza_15253999773912500974.jpg/60x60bb.png',
            attributes: { height: '60' }
          },
          {
            label:
              'https://is3-ssl.mzstatic.com/image/thumb/Podcasts126/v4/c0/59/78/c05978e9-ced9-2d1f-b45c-0d3d229a0f5a/mza_15253999773912500974.jpg/170x170bb.png',
            attributes: { height: '170' }
          }
        ],
        summary: {
          label:
            'Award-winning actor Alec Baldwin takes listeners into the lives of artists, policy makers and performers. Alec sidesteps the predictable by going inside the dressing rooms, apartments, and offices of people we want to understand better: Ira Glass, Lena Dunham, David Letterman, Barbara Streisand, Tom Yorke, Chris Rock and others. Hear what happens when an inveterate guest becomes a host.'
        },
        'im:price': {
          label: 'Get',
          attributes: { amount: '0', currency: 'USD' }
        },
        'im:contentType': { attributes: { term: 'Podcast', label: 'Podcast' } },
        rights: { label: '© 2023 iHeartPodcasts' },
        title: { label: "Here's The Thing with Alec Baldwin - iHeartPodcasts" },
        link: {
          attributes: {
            rel: 'alternate',
            type: 'text/html',
            href: 'https://podcasts.apple.com/us/podcast/heres-the-thing-with-alec-baldwin/id472939437?uo=2'
          }
        },
        id: {
          label:
            'https://podcasts.apple.com/us/podcast/heres-the-thing-with-alec-baldwin/id472939437?uo=2',
          attributes: { 'im:id': '472939437' }
        },
        'im:artist': { label: 'iHeartPodcasts' },
        category: {
          attributes: {
            'im:id': '1525',
            term: 'Music Interviews',
            scheme:
              'https://podcasts.apple.com/us/genre/podcasts-music-music-interviews/id1525?uo=2',
            label: 'Music Interviews'
          }
        },
        'im:releaseDate': {
          label: '2023-02-20T21:00:00-07:00',
          attributes: { label: 'February 20, 2023' }
        }
      },
      {
        'im:name': { label: "Dolly Parton's America" },
        'im:image': [
          {
            label:
              'https://is3-ssl.mzstatic.com/image/thumb/Podcasts115/v4/58/b8/16/58b8165d-d674-16cd-3822-36d8acad0151/mza_5834995761907664558.jpg/55x55bb.png',
            attributes: { height: '55' }
          },
          {
            label:
              'https://is5-ssl.mzstatic.com/image/thumb/Podcasts115/v4/58/b8/16/58b8165d-d674-16cd-3822-36d8acad0151/mza_5834995761907664558.jpg/60x60bb.png',
            attributes: { height: '60' }
          },
          {
            label:
              'https://is2-ssl.mzstatic.com/image/thumb/Podcasts115/v4/58/b8/16/58b8165d-d674-16cd-3822-36d8acad0151/mza_5834995761907664558.jpg/170x170bb.png',
            attributes: { height: '170' }
          }
        ],
        summary: {
          label:
            'In this intensely divided moment, one of the few things everyone still seems to agree on is Dolly Parton—but why? That simple question leads to a deeply personal, historical, and musical rethinking of one of America’s great icons. Join us for a 9-episode journey into the Dollyverse. Hosted by Jad Abumrad. Produced and reported by Shima Oliaee. Dolly Parton’s America is a production from OSM Audio and WNYC Studios.'
        },
        'im:price': {
          label: 'Get',
          attributes: { amount: '0', currency: 'USD' }
        },
        'im:contentType': { attributes: { term: 'Podcast', label: 'Podcast' } },
        rights: { label: '© WNYC Studios & OSM Audio' },
        title: { label: "Dolly Parton's America - WNYC Studios & OSM Audio" },
        link: {
          attributes: {
            rel: 'alternate',
            type: 'text/html',
            href: 'https://podcasts.apple.com/us/podcast/dolly-partons-america/id1481398762?uo=2'
          }
        },
        id: {
          label:
            'https://podcasts.apple.com/us/podcast/dolly-partons-america/id1481398762?uo=2',
          attributes: { 'im:id': '1481398762' }
        },
        'im:artist': {
          label: 'WNYC Studios & OSM Audio',
          attributes: {
            href: 'https://podcasts.apple.com/us/artist/wnyc/127981066?uo=2'
          }
        },
        category: {
          attributes: {
            'im:id': '1524',
            term: 'Music History',
            scheme:
              'https://podcasts.apple.com/us/genre/podcasts-music-music-history/id1524?uo=2',
            label: 'Music History'
          }
        },
        'im:releaseDate': {
          label: '2021-07-06T09:00:00-07:00',
          attributes: { label: 'July 6, 2021' }
        }
      },
      {
        'im:name': { label: 'Questlove Supreme' },
        'im:image': [
          {
            label:
              'https://is2-ssl.mzstatic.com/image/thumb/Podcasts122/v4/08/fd/98/08fd98af-f051-5633-dc48-a57dcc358b18/mza_13266751872357072503.jpg/55x55bb.png',
            attributes: { height: '55' }
          },
          {
            label:
              'https://is4-ssl.mzstatic.com/image/thumb/Podcasts122/v4/08/fd/98/08fd98af-f051-5633-dc48-a57dcc358b18/mza_13266751872357072503.jpg/60x60bb.png',
            attributes: { height: '60' }
          },
          {
            label:
              'https://is1-ssl.mzstatic.com/image/thumb/Podcasts122/v4/08/fd/98/08fd98af-f051-5633-dc48-a57dcc358b18/mza_13266751872357072503.jpg/170x170bb.png',
            attributes: { height: '170' }
          }
        ],
        summary: {
          label:
            'Questlove Supreme is a fun, irreverent and educational weekly podcast that digs deep into the stories of musical legends and cultural icons in a way that only Questlove and Team Supreme can deliver. Led by Each episode is driven by conversation ranging from the guest’s origins (along with a few never-before-revealed secrets to their success) to their life passions and current projects. This is not your typical interview show. This is about legends and legends in the making bringing their legacy to life in their own words. Previous guests have included Usher, Michelle Obama, Chris Rock, Steve Miller, Maya Rudolph, Weird Al, Chaka Khan, Babyface and many more.'
        },
        'im:price': {
          label: 'Get',
          attributes: { amount: '0', currency: 'USD' }
        },
        'im:contentType': { attributes: { term: 'Podcast', label: 'Podcast' } },
        rights: { label: '© 2023 iHeartPodcasts' },
        title: { label: 'Questlove Supreme - iHeartPodcasts' },
        link: {
          attributes: {
            rel: 'alternate',
            type: 'text/html',
            href: 'https://podcasts.apple.com/us/podcast/questlove-supreme/id1485250501?uo=2'
          }
        },
        id: {
          label:
            'https://podcasts.apple.com/us/podcast/questlove-supreme/id1485250501?uo=2',
          attributes: { 'im:id': '1485250501' }
        },
        'im:artist': {
          label: 'iHeartPodcasts',
          attributes: {
            href: 'https://podcasts.apple.com/us/artist/iheartradio/284341002?uo=2'
          }
        },
        category: {
          attributes: {
            'im:id': '1310',
            term: 'Music',
            scheme:
              'https://podcasts.apple.com/us/genre/podcasts-music/id1310?uo=2',
            label: 'Music'
          }
        },
        'im:releaseDate': {
          label: '2023-03-05T21:01:00-07:00',
          attributes: { label: 'March 5, 2023' }
        }
      },
      {
        'im:name': { label: 'Song Exploder' },
        'im:image': [
          {
            label:
              'https://is4-ssl.mzstatic.com/image/thumb/Podcasts116/v4/30/1c/1f/301c1f05-639c-bb22-cfdd-4c71aca5761e/mza_3479668065976336868.png/55x55bb.png',
            attributes: { height: '55' }
          },
          {
            label:
              'https://is3-ssl.mzstatic.com/image/thumb/Podcasts116/v4/30/1c/1f/301c1f05-639c-bb22-cfdd-4c71aca5761e/mza_3479668065976336868.png/60x60bb.png',
            attributes: { height: '60' }
          },
          {
            label:
              'https://is3-ssl.mzstatic.com/image/thumb/Podcasts116/v4/30/1c/1f/301c1f05-639c-bb22-cfdd-4c71aca5761e/mza_3479668065976336868.png/170x170bb.png',
            attributes: { height: '170' }
          }
        ],
        summary: {
          label:
            'Song Exploder is a podcast where musicians take apart their songs, and piece by piece, tell the story of how they were made. Each episode features an artist discussing a song of theirs, breaking down the sounds and ideas that went into the writing and recording. Hosted and produced by Hrishikesh Hirway.'
        },
        'im:price': {
          label: 'Get',
          attributes: { amount: '0', currency: 'USD' }
        },
        'im:contentType': { attributes: { term: 'Podcast', label: 'Podcast' } },
        rights: { label: '© Translucence' },
        title: { label: 'Song Exploder - Hrishikesh Hirway' },
        link: {
          attributes: {
            rel: 'alternate',
            type: 'text/html',
            href: 'https://podcasts.apple.com/us/podcast/song-exploder/id788236947?uo=2'
          }
        },
        id: {
          label:
            'https://podcasts.apple.com/us/podcast/song-exploder/id788236947?uo=2',
          attributes: { 'im:id': '788236947' }
        },
        'im:artist': {
          label: 'Hrishikesh Hirway',
          attributes: {
            href: 'https://podcasts.apple.com/us/artist/radiotopia/850139119?uo=2'
          }
        },
        category: {
          attributes: {
            'im:id': '1310',
            term: 'Music',
            scheme:
              'https://podcasts.apple.com/us/genre/podcasts-music/id1310?uo=2',
            label: 'Music'
          }
        },
        'im:releaseDate': {
          label: '2023-02-22T11:00:00-07:00',
          attributes: { label: 'February 22, 2023' }
        }
      },
      {
        'im:name': { label: 'The Dave Ryan Show' },
        'im:image': [
          {
            label:
              'https://is3-ssl.mzstatic.com/image/thumb/Podcasts115/v4/28/ae/ba/28aebaef-86c3-62e1-00b8-6bde0beaa85e/mza_13363439944907994191.png/55x55bb.png',
            attributes: { height: '55' }
          },
          {
            label:
              'https://is2-ssl.mzstatic.com/image/thumb/Podcasts115/v4/28/ae/ba/28aebaef-86c3-62e1-00b8-6bde0beaa85e/mza_13363439944907994191.png/60x60bb.png',
            attributes: { height: '60' }
          },
          {
            label:
              'https://is4-ssl.mzstatic.com/image/thumb/Podcasts115/v4/28/ae/ba/28aebaef-86c3-62e1-00b8-6bde0beaa85e/mza_13363439944907994191.png/170x170bb.png',
            attributes: { height: '170' }
          }
        ],
        summary: { label: 'Now with nearly 7 listeners.' },
        'im:price': {
          label: 'Get',
          attributes: { amount: '0', currency: 'USD' }
        },
        'im:contentType': { attributes: { term: 'Podcast', label: 'Podcast' } },
        rights: { label: '© Copyright 2023' },
        title: { label: 'The Dave Ryan Show - 101.3 KDWB' },
        link: {
          attributes: {
            rel: 'alternate',
            type: 'text/html',
            href: 'https://podcasts.apple.com/us/podcast/the-dave-ryan-show/id1286770630?uo=2'
          }
        },
        id: {
          label:
            'https://podcasts.apple.com/us/podcast/the-dave-ryan-show/id1286770630?uo=2',
          attributes: { 'im:id': '1286770630' }
        },
        'im:artist': { label: '101.3 KDWB' },
        category: {
          attributes: {
            'im:id': '1310',
            term: 'Music',
            scheme:
              'https://podcasts.apple.com/us/genre/podcasts-music/id1310?uo=2',
            label: 'Music'
          }
        },
        'im:releaseDate': {
          label: '2023-03-06T08:07:00-07:00',
          attributes: { label: 'March 6, 2023' }
        }
      },
      {
        'im:name': { label: 'Switched on Pop' },
        'im:image': [
          {
            label:
              'https://is1-ssl.mzstatic.com/image/thumb/Podcasts116/v4/6e/7c/17/6e7c170e-ecd6-a572-a851-6b0a02a168c5/mza_7324103647670443393.jpeg/55x55bb.png',
            attributes: { height: '55' }
          },
          {
            label:
              'https://is5-ssl.mzstatic.com/image/thumb/Podcasts116/v4/6e/7c/17/6e7c170e-ecd6-a572-a851-6b0a02a168c5/mza_7324103647670443393.jpeg/60x60bb.png',
            attributes: { height: '60' }
          },
          {
            label:
              'https://is2-ssl.mzstatic.com/image/thumb/Podcasts116/v4/6e/7c/17/6e7c170e-ecd6-a572-a851-6b0a02a168c5/mza_7324103647670443393.jpeg/170x170bb.png',
            attributes: { height: '170' }
          }
        ],
        summary: {
          label:
            'A podcast all about the making and meaning of popular music. Musicologist Nate Sloan & songwriter Charlie Harding pull back the curtain on how pop hits work magic on our ears & our culture. From Vulture and the Vox Media Podcast Network.'
        },
        'im:price': {
          label: 'Get',
          attributes: { amount: '0', currency: 'USD' }
        },
        'im:contentType': { attributes: { term: 'Podcast', label: 'Podcast' } },
        rights: { label: '© 2021 Vox Media, Inc. All Rights Reserved' },
        title: { label: 'Switched on Pop - Vulture' },
        link: {
          attributes: {
            rel: 'alternate',
            type: 'text/html',
            href: 'https://podcasts.apple.com/us/podcast/switched-on-pop/id934552872?uo=2'
          }
        },
        id: {
          label:
            'https://podcasts.apple.com/us/podcast/switched-on-pop/id934552872?uo=2',
          attributes: { 'im:id': '934552872' }
        },
        'im:artist': {
          label: 'Vulture',
          attributes: {
            href: 'https://podcasts.apple.com/us/artist/vulture/1536636674?uo=2'
          }
        },
        category: {
          attributes: {
            'im:id': '1523',
            term: 'Music Commentary',
            scheme:
              'https://podcasts.apple.com/us/genre/podcasts-music-music-commentary/id1523?uo=2',
            label: 'Music Commentary'
          }
        },
        'im:releaseDate': {
          label: '2023-02-28T02:00:00-07:00',
          attributes: { label: 'February 28, 2023' }
        }
      },
      {
        'im:name': { label: 'Angie Martinez IRL' },
        'im:price': {
          label: 'Get',
          attributes: { amount: '0', currency: 'USD' }
        },
        'im:image': [
          {
            label:
              'https://is4-ssl.mzstatic.com/image/thumb/Podcasts113/v4/dd/2a/ac/dd2aacbf-f784-7ff2-94f9-939c923c98b8/mza_15448115337081593321.jpg/55x55bb.png',
            attributes: { height: '55' }
          },
          {
            label:
              'https://is3-ssl.mzstatic.com/image/thumb/Podcasts113/v4/dd/2a/ac/dd2aacbf-f784-7ff2-94f9-939c923c98b8/mza_15448115337081593321.jpg/60x60bb.png',
            attributes: { height: '60' }
          },
          {
            label:
              'https://is4-ssl.mzstatic.com/image/thumb/Podcasts113/v4/dd/2a/ac/dd2aacbf-f784-7ff2-94f9-939c923c98b8/mza_15448115337081593321.jpg/170x170bb.png',
            attributes: { height: '170' }
          }
        ],
        summary: {
          label:
            'Created and hosted by renowned media personality Angie Martinez, “IRL” sees Angie and notable guests sitting down to candidly explore the magic of life, it’s fragility, purpose and complexities.  Angie’s conversations will explore legacy, philosophies, and the extraordinary ways we choose to live our real lives. '
        },
        'im:artist': { label: 'iHeartPodcasts' },
        title: { label: 'Angie Martinez IRL - iHeartPodcasts' },
        link: {
          attributes: {
            rel: 'alternate',
            type: 'text/html',
            href: 'https://podcasts.apple.com/us/podcast/angie-martinez-irl/id1633466636?uo=2'
          }
        },
        id: {
          label:
            'https://podcasts.apple.com/us/podcast/angie-martinez-irl/id1633466636?uo=2',
          attributes: { 'im:id': '1633466636' }
        },
        'im:contentType': { attributes: { term: 'Podcast', label: 'Podcast' } },
        category: {
          attributes: {
            'im:id': '1310',
            term: 'Music',
            scheme:
              'https://podcasts.apple.com/us/genre/podcasts-music/id1310?uo=2',
            label: 'Music'
          }
        },
        'im:releaseDate': {
          label: '2023-02-09T21:00:00-07:00',
          attributes: { label: 'February 9, 2023' }
        }
      },
      {
        'im:name': { label: 'BIG FACTS with Big Bank & DJ Scream' },
        'im:image': [
          {
            label:
              'https://is4-ssl.mzstatic.com/image/thumb/Podcasts116/v4/a1/f2/69/a1f26993-621d-8ba7-4862-a09ec45ec653/mza_13633358022444641111.jpg/55x55bb.png',
            attributes: { height: '55' }
          },
          {
            label:
              'https://is1-ssl.mzstatic.com/image/thumb/Podcasts116/v4/a1/f2/69/a1f26993-621d-8ba7-4862-a09ec45ec653/mza_13633358022444641111.jpg/60x60bb.png',
            attributes: { height: '60' }
          },
          {
            label:
              'https://is5-ssl.mzstatic.com/image/thumb/Podcasts116/v4/a1/f2/69/a1f26993-621d-8ba7-4862-a09ec45ec653/mza_13633358022444641111.jpg/170x170bb.png',
            attributes: { height: '170' }
          }
        ],
        summary: {
          label:
            'Two Atlanta legends Big Bank and DJ Scream bring you the long awaited BIG FACTS Podcast!'
        },
        'im:price': {
          label: 'Get',
          attributes: { amount: '0', currency: 'USD' }
        },
        'im:contentType': { attributes: { term: 'Podcast', label: 'Podcast' } },
        rights: { label: '© 2023 The Black Effect and iHeartPodcasts' },
        title: {
          label:
            'BIG FACTS with Big Bank & DJ Scream - The Black Effect and iHeartPodcasts'
        },
        link: {
          attributes: {
            rel: 'alternate',
            type: 'text/html',
            href: 'https://podcasts.apple.com/us/podcast/big-facts-with-big-bank-dj-scream/id1493353598?uo=2'
          }
        },
        id: {
          label:
            'https://podcasts.apple.com/us/podcast/big-facts-with-big-bank-dj-scream/id1493353598?uo=2',
          attributes: { 'im:id': '1493353598' }
        },
        'im:artist': { label: 'The Black Effect and iHeartPodcasts' },
        category: {
          attributes: {
            'im:id': '1525',
            term: 'Music Interviews',
            scheme:
              'https://podcasts.apple.com/us/genre/podcasts-music-music-interviews/id1525?uo=2',
            label: 'Music Interviews'
          }
        },
        'im:releaseDate': {
          label: '2023-03-07T18:50:00-07:00',
          attributes: { label: 'March 7, 2023' }
        }
      },
      {
        'im:name': { label: 'CLUBLIFE' },
        'im:image': [
          {
            label:
              'https://is2-ssl.mzstatic.com/image/thumb/Podcasts125/v4/b6/40/6c/b6406c4c-c0c4-c137-7134-e401b9bf7785/mza_13270719876335733767.jpg/55x55bb.png',
            attributes: { height: '55' }
          },
          {
            label:
              'https://is4-ssl.mzstatic.com/image/thumb/Podcasts125/v4/b6/40/6c/b6406c4c-c0c4-c137-7134-e401b9bf7785/mza_13270719876335733767.jpg/60x60bb.png',
            attributes: { height: '60' }
          },
          {
            label:
              'https://is1-ssl.mzstatic.com/image/thumb/Podcasts125/v4/b6/40/6c/b6406c4c-c0c4-c137-7134-e401b9bf7785/mza_13270719876335733767.jpg/170x170bb.png',
            attributes: { height: '170' }
          }
        ],
        summary: {
          label:
            'Subscribe to CLUBLIFE by Tiësto for an hour of the best club tracks from around the world with your favorite DJ. For more info about Tiësto please visit www.tiesto.com\n Hosted on Acast. See acast.com/privacy for more information.'
        },
        'im:price': {
          label: 'Get',
          attributes: { amount: '0', currency: 'USD' }
        },
        'im:contentType': { attributes: { term: 'Podcast', label: 'Podcast' } },
        rights: { label: '© Tiësto' },
        title: { label: 'CLUBLIFE - Tiësto' },
        link: {
          attributes: {
            rel: 'alternate',
            type: 'text/html',
            href: 'https://podcasts.apple.com/us/podcast/clublife/id251507798?uo=2'
          }
        },
        id: {
          label:
            'https://podcasts.apple.com/us/podcast/clublife/id251507798?uo=2',
          attributes: { 'im:id': '251507798' }
        },
        'im:artist': {
          label: 'Tiësto',
          attributes: {
            href: 'https://podcasts.apple.com/us/artist/bnn/340006148?uo=2'
          }
        },
        category: {
          attributes: {
            'im:id': '1310',
            term: 'Music',
            scheme:
              'https://podcasts.apple.com/us/genre/podcasts-music/id1310?uo=2',
            label: 'Music'
          }
        },
        'im:releaseDate': {
          label: '2023-02-24T07:00:00-07:00',
          attributes: { label: 'February 24, 2023' }
        }
      },
      {
        'im:name': { label: 'R&B Money' },
        'im:image': [
          {
            label:
              'https://is3-ssl.mzstatic.com/image/thumb/Podcasts112/v4/98/d1/ee/98d1ee22-c964-5ee7-bb60-a15e87bb2e54/mza_14938606354122667309.jpg/55x55bb.png',
            attributes: { height: '55' }
          },
          {
            label:
              'https://is5-ssl.mzstatic.com/image/thumb/Podcasts112/v4/98/d1/ee/98d1ee22-c964-5ee7-bb60-a15e87bb2e54/mza_14938606354122667309.jpg/60x60bb.png',
            attributes: { height: '60' }
          },
          {
            label:
              'https://is1-ssl.mzstatic.com/image/thumb/Podcasts112/v4/98/d1/ee/98d1ee22-c964-5ee7-bb60-a15e87bb2e54/mza_14938606354122667309.jpg/170x170bb.png',
            attributes: { height: '170' }
          }
        ],
        summary: {
          label:
            'R&B Money Podcast is hosted by the Legendary Grammy Award winning R&B singer/songwriter/producer TANK and his business partner multi-platinum songwriter & executive J. Valentine.\n\nThis podcast is for the super dedicated R&B fans, covering everything from Keith Sweat to Pink Sweat$. R&B Money has created a fly space for artist & executives in the game to reminisce, with exceptional compelling story telling and a place of discovery for the fans. '
        },
        'im:price': {
          label: 'Get',
          attributes: { amount: '0', currency: 'USD' }
        },
        'im:contentType': { attributes: { term: 'Podcast', label: 'Podcast' } },
        rights: { label: '© 2023 The Black Effect and iHeartPodcasts' },
        title: { label: 'R&B Money - The Black Effect and iHeartPodcasts' },
        link: {
          attributes: {
            rel: 'alternate',
            type: 'text/html',
            href: 'https://podcasts.apple.com/us/podcast/r-b-money/id1623212249?uo=2'
          }
        },
        id: {
          label:
            'https://podcasts.apple.com/us/podcast/r-b-money/id1623212249?uo=2',
          attributes: { 'im:id': '1623212249' }
        },
        'im:artist': { label: 'The Black Effect and iHeartPodcasts' },
        category: {
          attributes: {
            'im:id': '1523',
            term: 'Music Commentary',
            scheme:
              'https://podcasts.apple.com/us/genre/podcasts-music-music-commentary/id1523?uo=2',
            label: 'Music Commentary'
          }
        },
        'im:releaseDate': {
          label: '2023-03-01T00:09:00-07:00',
          attributes: { label: 'March 1, 2023' }
        }
      },
      {
        'im:name': { label: 'California Love' },
        'im:price': {
          label: 'Get',
          attributes: { amount: '0', currency: 'USD' }
        },
        'im:image': [
          {
            label:
              'https://is1-ssl.mzstatic.com/image/thumb/Podcasts116/v4/e7/eb/45/e7eb454c-6ecb-22a9-9329-78f7986ee325/mza_4378720604142084767.jpg/55x55bb.png',
            attributes: { height: '55' }
          },
          {
            label:
              'https://is5-ssl.mzstatic.com/image/thumb/Podcasts116/v4/e7/eb/45/e7eb454c-6ecb-22a9-9329-78f7986ee325/mza_4378720604142084767.jpg/60x60bb.png',
            attributes: { height: '60' }
          },
          {
            label:
              'https://is1-ssl.mzstatic.com/image/thumb/Podcasts116/v4/e7/eb/45/e7eb454c-6ecb-22a9-9329-78f7986ee325/mza_4378720604142084767.jpg/170x170bb.png',
            attributes: { height: '170' }
          }
        ],
        summary: {
          label:
            'California Love is a blend of memoir, pop culture analysis and oral history. The newest season, K-pop Dreaming, is about the rise and history of K-pop in the United States, as told from the point-of-view of the Korean diaspora in Los Angeles. Host Vivian Yoon takes listeners on a journey from K-pop’s origins in Korean trot music and American presence in post-war South Korea to the 1992 LA Uprising and the booming global popularity of K-pop in the present day, all juxtaposed against Yoon’s own coming-of-age as a second generation immigrant in Los Angeles, struggling to fit in and come to terms with her own identity. The series premieres on February 23rd.\n\nIn the first season Walter Thompson-Hernández was inspired by Tupac and Dr. Dre\'s "California Love"- a love letter and anthem for a generation. Walter invites listeners to join him in his family home, on horseback through the streets of Compton, and up into the sky to examine belonging.'
        },
        'im:artist': {
          label: 'LAist Studios',
          attributes: {
            href: 'https://podcasts.apple.com/us/artist/laist/1519058791?uo=2'
          }
        },
        title: { label: 'California Love - LAist Studios' },
        link: {
          attributes: {
            rel: 'alternate',
            type: 'text/html',
            href: 'https://podcasts.apple.com/us/podcast/california-love/id1522337888?uo=2'
          }
        },
        id: {
          label:
            'https://podcasts.apple.com/us/podcast/california-love/id1522337888?uo=2',
          attributes: { 'im:id': '1522337888' }
        },
        'im:contentType': { attributes: { term: 'Podcast', label: 'Podcast' } },
        category: {
          attributes: {
            'im:id': '1310',
            term: 'Music',
            scheme:
              'https://podcasts.apple.com/us/genre/podcasts-music/id1310?uo=2',
            label: 'Music'
          }
        },
        'im:releaseDate': {
          label: '2023-02-23T02:02:00-07:00',
          attributes: { label: 'February 23, 2023' }
        }
      },
      {
        'im:name': { label: 'Still Bombing Podcast' },
        'im:image': [
          {
            label:
              'https://is2-ssl.mzstatic.com/image/thumb/Podcasts116/v4/f6/d1/97/f6d19767-45da-18f7-efc4-ec6ea5c86a14/mza_11383318324066371787.jpg/55x55bb.png',
            attributes: { height: '55' }
          },
          {
            label:
              'https://is4-ssl.mzstatic.com/image/thumb/Podcasts116/v4/f6/d1/97/f6d19767-45da-18f7-efc4-ec6ea5c86a14/mza_11383318324066371787.jpg/60x60bb.png',
            attributes: { height: '60' }
          },
          {
            label:
              'https://is2-ssl.mzstatic.com/image/thumb/Podcasts116/v4/f6/d1/97/f6d19767-45da-18f7-efc4-ec6ea5c86a14/mza_11383318324066371787.jpg/170x170bb.png',
            attributes: { height: '170' }
          }
        ],
        summary: {
          label:
            'Reggie Wright Jr., MOB James and John Hyland discuss the past and present topics surrounding the streets, music, and pop culture.'
        },
        'im:price': {
          label: 'Get',
          attributes: { amount: '0', currency: 'USD' }
        },
        'im:contentType': { attributes: { term: 'Podcast', label: 'Podcast' } },
        rights: { label: '© 2023 Still Bombing Podcast' },
        title: {
          label:
            'Still Bombing Podcast - Reggie Wright, James McDonald, and John Hyland'
        },
        link: {
          attributes: {
            rel: 'alternate',
            type: 'text/html',
            href: 'https://podcasts.apple.com/us/podcast/still-bombing-podcast/id1674676257?uo=2'
          }
        },
        id: {
          label:
            'https://podcasts.apple.com/us/podcast/still-bombing-podcast/id1674676257?uo=2',
          attributes: { 'im:id': '1674676257' }
        },
        'im:artist': {
          label: 'Reggie Wright, James McDonald, and John Hyland'
        },
        category: {
          attributes: {
            'im:id': '1524',
            term: 'Music History',
            scheme:
              'https://podcasts.apple.com/us/genre/podcasts-music-music-history/id1524?uo=2',
            label: 'Music History'
          }
        },
        'im:releaseDate': {
          label: '2023-03-06T00:00:00-07:00',
          attributes: { label: 'March 6, 2023' }
        }
      },
      {
        'im:name': { label: 'Every Voice with Terrance McKnight' },
        'im:image': [
          {
            label:
              'https://is2-ssl.mzstatic.com/image/thumb/Podcasts116/v4/a3/40/a9/a340a9a8-6869-7801-c386-e6e868250356/mza_8132017134415620898.jpg/55x55bb.png',
            attributes: { height: '55' }
          },
          {
            label:
              'https://is4-ssl.mzstatic.com/image/thumb/Podcasts116/v4/a3/40/a9/a340a9a8-6869-7801-c386-e6e868250356/mza_8132017134415620898.jpg/60x60bb.png',
            attributes: { height: '60' }
          },
          {
            label:
              'https://is3-ssl.mzstatic.com/image/thumb/Podcasts116/v4/a3/40/a9/a340a9a8-6869-7801-c386-e6e868250356/mza_8132017134415620898.jpg/170x170bb.png',
            attributes: { height: '170' }
          }
        ],
        summary: {
          label:
            '“Every Voice with Terrance McKnight” is a show that spotlights the vibrant stories and perspectives that reflect the whole of the American musical experience. \n\nThere are many different kinds of classical music, depending on where you are in the world. While this music typically preserves the traditions of a given society, classical music in America remains wedded to its Western European roots. On this show, we want to know why — and what America’s classical music really sounds like. Through interviews, historical investigation, and personal storytelling, Terrance McKnight unearths the hidden voices that have been shaping our musical traditions all along. \n\nOur debut season examines the representation of Blackness in opera. While character flaws are universal, stereotypes often fall along racial lines. We look at the loneliness, jealousy, self-loathing, and cultural appropriation associated with African characters in 18th and 19th century operas by Mozart and Verdi, and we introduce the African-American personalities found in the operas of Atlanta-based composer Dr. Sharon Willis.'
        },
        'im:price': {
          label: 'Get',
          attributes: { amount: '0', currency: 'USD' }
        },
        'im:contentType': { attributes: { term: 'Podcast', label: 'Podcast' } },
        rights: { label: '© WQXR' },
        title: { label: 'Every Voice with Terrance McKnight - WQXR' },
        link: {
          attributes: {
            rel: 'alternate',
            type: 'text/html',
            href: 'https://podcasts.apple.com/us/podcast/every-voice-with-terrance-mcknight/id1669303716?uo=2'
          }
        },
        id: {
          label:
            'https://podcasts.apple.com/us/podcast/every-voice-with-terrance-mcknight/id1669303716?uo=2',
          attributes: { 'im:id': '1669303716' }
        },
        'im:artist': { label: 'WQXR' },
        category: {
          attributes: {
            'im:id': '1524',
            term: 'Music History',
            scheme:
              'https://podcasts.apple.com/us/genre/podcasts-music-music-history/id1524?uo=2',
            label: 'Music History'
          }
        },
        'im:releaseDate': {
          label: '2023-02-23T01:00:00-07:00',
          attributes: { label: 'February 23, 2023' }
        }
      },
      {
        'im:name': { label: 'The Pitchfork Review' },
        'im:price': {
          label: 'Get',
          attributes: { amount: '0', currency: 'USD' }
        },
        'im:image': [
          {
            label:
              'https://is5-ssl.mzstatic.com/image/thumb/Podcasts112/v4/fa/61/5b/fa615b74-71fc-e908-78be-fc34ac6194b9/mza_10065745789569992096.jpg/55x55bb.png',
            attributes: { height: '55' }
          },
          {
            label:
              'https://is4-ssl.mzstatic.com/image/thumb/Podcasts112/v4/fa/61/5b/fa615b74-71fc-e908-78be-fc34ac6194b9/mza_10065745789569992096.jpg/60x60bb.png',
            attributes: { height: '60' }
          },
          {
            label:
              'https://is2-ssl.mzstatic.com/image/thumb/Podcasts112/v4/fa/61/5b/fa615b74-71fc-e908-78be-fc34ac6194b9/mza_10065745789569992096.jpg/170x170bb.png',
            attributes: { height: '170' }
          }
        ],
        summary: {
          label:
            "Brought to you by the music critics at Pitchfork, The Pitchfork Review is a show for music fans and obsessives who can’t wait to talk about the latest releases. Co-hosted by Pitchfork editor-in-chief Puja Patel and Reviews Editor Jeremy D. Larson, this podcast pulls back the curtain on our reviews and scores, dives deep into new music, and gives an expert guide to what’s exciting, what’s great, and what’s just plain terrible.\n\nShare your thoughts on Pitchfork's The Pitchfork Review podcast. As a token of our appreciation, you will be eligible to enter a prize drawing up to $1,000 after you complete the survey. [LINK]"
        },
        'im:artist': {
          label: 'Pitchfork',
          attributes: {
            href: 'https://podcasts.apple.com/us/artist/cond%C3%A9-nast/1539767742?uo=2'
          }
        },
        title: { label: 'The Pitchfork Review - Pitchfork' },
        link: {
          attributes: {
            rel: 'alternate',
            type: 'text/html',
            href: 'https://podcasts.apple.com/us/podcast/the-pitchfork-review/id1516844211?uo=2'
          }
        },
        id: {
          label:
            'https://podcasts.apple.com/us/podcast/the-pitchfork-review/id1516844211?uo=2',
          attributes: { 'im:id': '1516844211' }
        },
        'im:contentType': { attributes: { term: 'Podcast', label: 'Podcast' } },
        category: {
          attributes: {
            'im:id': '1523',
            term: 'Music Commentary',
            scheme:
              'https://podcasts.apple.com/us/genre/podcasts-music-music-commentary/id1523?uo=2',
            label: 'Music Commentary'
          }
        },
        'im:releaseDate': {
          label: '2023-03-02T02:00:00-07:00',
          attributes: { label: 'March 2, 2023' }
        }
      },
      {
        'im:name': { label: 'Caresha Please' },
        'im:image': [
          {
            label:
              'https://is3-ssl.mzstatic.com/image/thumb/Podcasts122/v4/84/84/ab/8484ab60-8c9e-30d5-92d3-c806c89cbbe7/mza_14154291241936766492.jpg/55x55bb.png',
            attributes: { height: '55' }
          },
          {
            label:
              'https://is2-ssl.mzstatic.com/image/thumb/Podcasts122/v4/84/84/ab/8484ab60-8c9e-30d5-92d3-c806c89cbbe7/mza_14154291241936766492.jpg/60x60bb.png',
            attributes: { height: '60' }
          },
          {
            label:
              'https://is1-ssl.mzstatic.com/image/thumb/Podcasts122/v4/84/84/ab/8484ab60-8c9e-30d5-92d3-c806c89cbbe7/mza_14154291241936766492.jpg/170x170bb.png',
            attributes: { height: '170' }
          }
        ],
        summary: {
          label:
            "Host Yung Miami (of City Girls' fame) welcomes the biggest names in Hip Hop and entertainment for wild and unfiltered conversations about their lives, careers, relationships, and much more. Caresha Brownlee (Yung Miami) is a famous singer, musician, entrepreneur, model, social media star, and Internet sensation from Miami, FL. She is sure to get people talking and bring some surprises with fun, no holds barred interviews."
        },
        'im:price': {
          label: 'Get',
          attributes: { amount: '0', currency: 'USD' }
        },
        'im:contentType': { attributes: { term: 'Podcast', label: 'Podcast' } },
        rights: { label: '© REVOLT Media and TV LLC' },
        title: { label: 'Caresha Please - REVOLT' },
        link: {
          attributes: {
            rel: 'alternate',
            type: 'text/html',
            href: 'https://podcasts.apple.com/us/podcast/caresha-please/id1628914491?uo=2'
          }
        },
        id: {
          label:
            'https://podcasts.apple.com/us/podcast/caresha-please/id1628914491?uo=2',
          attributes: { 'im:id': '1628914491' }
        },
        'im:artist': { label: 'REVOLT' },
        category: {
          attributes: {
            'im:id': '1525',
            term: 'Music Interviews',
            scheme:
              'https://podcasts.apple.com/us/genre/podcasts-music-music-interviews/id1525?uo=2',
            label: 'Music Interviews'
          }
        },
        'im:releaseDate': {
          label: '2023-01-19T17:00:00-07:00',
          attributes: { label: 'January 19, 2023' }
        }
      },
      {
        'im:name': { label: 'My Expert Opinion' },
        'im:image': [
          {
            label:
              'https://is1-ssl.mzstatic.com/image/thumb/Podcasts112/v4/a1/b4/ec/a1b4ec82-486e-3d09-a41f-80b534eaf447/mza_9693230288382565767.jpeg/55x55bb.png',
            attributes: { height: '55' }
          },
          {
            label:
              'https://is3-ssl.mzstatic.com/image/thumb/Podcasts112/v4/a1/b4/ec/a1b4ec82-486e-3d09-a41f-80b534eaf447/mza_9693230288382565767.jpeg/60x60bb.png',
            attributes: { height: '60' }
          },
          {
            label:
              'https://is3-ssl.mzstatic.com/image/thumb/Podcasts112/v4/a1/b4/ec/a1b4ec82-486e-3d09-a41f-80b534eaf447/mza_9693230288382565767.jpeg/170x170bb.png',
            attributes: { height: '170' }
          }
        ],
        summary: {
          label:
            'Math Hoffa’s My Expert Opinion is THE BEST NEW HIPHOP PODCAST!! Creating a setting to express his opinion of music culture and getting the opinions of other celebrity vet’s in the game while sharing stories, good laughs and insights that are entertaining to the viewers. Make sure to to head over to YouTube.com/MathHoffaTV and subscribe to the channel so you don’t miss out on ALL NEW content on the way!'
        },
        'im:price': {
          label: 'Get',
          attributes: { amount: '0', currency: 'USD' }
        },
        'im:contentType': { attributes: { term: 'Podcast', label: 'Podcast' } },
        rights: { label: '© All rights reserved' },
        title: { label: 'My Expert Opinion - Math Hoffa' },
        link: {
          attributes: {
            rel: 'alternate',
            type: 'text/html',
            href: 'https://podcasts.apple.com/us/podcast/my-expert-opinion/id1582681568?uo=2'
          }
        },
        id: {
          label:
            'https://podcasts.apple.com/us/podcast/my-expert-opinion/id1582681568?uo=2',
          attributes: { 'im:id': '1582681568' }
        },
        'im:artist': { label: 'Math Hoffa' },
        category: {
          attributes: {
            'im:id': '1310',
            term: 'Music',
            scheme:
              'https://podcasts.apple.com/us/genre/podcasts-music/id1310?uo=2',
            label: 'Music'
          }
        },
        'im:releaseDate': {
          label: '2023-02-08T15:03:00-07:00',
          attributes: { label: 'February 8, 2023' }
        }
      },
      {
        'im:name': { label: 'Juan Ep Is Life' },
        'im:image': [
          {
            label:
              'https://is2-ssl.mzstatic.com/image/thumb/Podcasts116/v4/a8/5a/02/a85a0290-d0ae-5075-d6ea-cd2c24140f43/mza_13642959551225505959.jpeg/55x55bb.png',
            attributes: { height: '55' }
          },
          {
            label:
              'https://is1-ssl.mzstatic.com/image/thumb/Podcasts116/v4/a8/5a/02/a85a0290-d0ae-5075-d6ea-cd2c24140f43/mza_13642959551225505959.jpeg/60x60bb.png',
            attributes: { height: '60' }
          },
          {
            label:
              'https://is4-ssl.mzstatic.com/image/thumb/Podcasts116/v4/a8/5a/02/a85a0290-d0ae-5075-d6ea-cd2c24140f43/mza_13642959551225505959.jpeg/170x170bb.png',
            attributes: { height: '170' }
          }
        ],
        summary: {
          label:
            'The Original Hip Hop Podcast hosted by Cipha Sounds and Rosenberg\n Hosted on Acast. See acast.com/privacy for more information.'
        },
        'im:price': {
          label: 'Get',
          attributes: { amount: '0', currency: 'USD' }
        },
        'im:contentType': { attributes: { term: 'Podcast', label: 'Podcast' } },
        rights: { label: '© All rights reserved.' },
        title: { label: 'Juan Ep Is Life - Juan Ep Is Life' },
        link: {
          attributes: {
            rel: 'alternate',
            type: 'text/html',
            href: 'https://podcasts.apple.com/us/podcast/juan-ep-is-life/id1544188719?uo=2'
          }
        },
        id: {
          label:
            'https://podcasts.apple.com/us/podcast/juan-ep-is-life/id1544188719?uo=2',
          attributes: { 'im:id': '1544188719' }
        },
        'im:artist': { label: 'Juan Ep Is Life' },
        category: {
          attributes: {
            'im:id': '1525',
            term: 'Music Interviews',
            scheme:
              'https://podcasts.apple.com/us/genre/podcasts-music-music-interviews/id1525?uo=2',
            label: 'Music Interviews'
          }
        },
        'im:releaseDate': {
          label: '2023-03-07T02:53:00-07:00',
          attributes: { label: 'March 7, 2023' }
        }
      },
      {
        'im:name': { label: 'Liberation 2' },
        'im:price': {
          label: 'Get',
          attributes: { amount: '0', currency: 'USD' }
        },
        'im:image': [
          {
            label:
              'https://is3-ssl.mzstatic.com/image/thumb/Podcasts116/v4/28/87/67/28876755-ac04-19ce-3e9e-e635a3418610/mza_3817605853076335786.jpg/55x55bb.png',
            attributes: { height: '55' }
          },
          {
            label:
              'https://is2-ssl.mzstatic.com/image/thumb/Podcasts116/v4/28/87/67/28876755-ac04-19ce-3e9e-e635a3418610/mza_3817605853076335786.jpg/60x60bb.png',
            attributes: { height: '60' }
          },
          {
            label:
              'https://is1-ssl.mzstatic.com/image/thumb/Podcasts116/v4/28/87/67/28876755-ac04-19ce-3e9e-e635a3418610/mza_3817605853076335786.jpg/170x170bb.png',
            attributes: { height: '170' }
          }
        ],
        summary: {
          label:
            'Talib Kweli and Madlib’s much-awaited Liberation 2 is a global call for unity through space and time. Featuring African artists Cassper Nyovest and Seun Kuti; collaborations with Q-Tip, Wildchild, Roc Marciano, Westside Gunn; a verse from the late Mac Miller; and debut collaborations between Kweli and his children Amani and Diani; the artists call on you to join them in a new kind of liberation. To hear the entire album and learn more: https://luminary.link/liberation2'
        },
        'im:artist': { label: 'Talib Kweli, Madlib' },
        title: { label: 'Liberation 2 - Talib Kweli, Madlib' },
        link: {
          attributes: {
            rel: 'alternate',
            type: 'text/html',
            href: 'https://podcasts.apple.com/us/podcast/liberation-2/id1670497799?uo=2'
          }
        },
        id: {
          label:
            'https://podcasts.apple.com/us/podcast/liberation-2/id1670497799?uo=2',
          attributes: { 'im:id': '1670497799' }
        },
        'im:contentType': { attributes: { term: 'Podcast', label: 'Podcast' } },
        category: {
          attributes: {
            'im:id': '1310',
            term: 'Music',
            scheme:
              'https://podcasts.apple.com/us/genre/podcasts-music/id1310?uo=2',
            label: 'Music'
          }
        },
        'im:releaseDate': {
          label: '2023-03-06T10:44:00-07:00',
          attributes: { label: 'March 6, 2023' }
        }
      },
      {
        'im:name': { label: 'About A Girl' },
        'im:image': [
          {
            label:
              'https://is4-ssl.mzstatic.com/image/thumb/Podcasts116/v4/71/03/ce/7103ce33-a0ab-775d-4cb5-b4e2444a31df/mza_17930232982653640491.jpg/55x55bb.png',
            attributes: { height: '55' }
          },
          {
            label:
              'https://is3-ssl.mzstatic.com/image/thumb/Podcasts116/v4/71/03/ce/7103ce33-a0ab-775d-4cb5-b4e2444a31df/mza_17930232982653640491.jpg/60x60bb.png',
            attributes: { height: '60' }
          },
          {
            label:
              'https://is5-ssl.mzstatic.com/image/thumb/Podcasts116/v4/71/03/ce/7103ce33-a0ab-775d-4cb5-b4e2444a31df/mza_17930232982653640491.jpg/170x170bb.png',
            attributes: { height: '170' }
          }
        ],
        summary: {
          label:
            "About A Girl is a scripted narrative anthology series about women whose stories have long been eclipsed by the legends of their famous partners. Bowie, Elvis, 2Pac, Prince, Miles, Biggie. Each of these icons created some of the most celebrated and enduring music of the modern age. But there's more to their stories than you know. About A Girl brings focus to the many women without whom the landscape of popular music might be very different."
        },
        'im:price': {
          label: 'Get',
          attributes: { amount: '0', currency: 'USD' }
        },
        'im:contentType': { attributes: { term: 'Podcast', label: 'Podcast' } },
        rights: { label: '© 2023 Double Elvis and iHeartPodcasts' },
        title: { label: 'About A Girl - iHeartPodcasts and Double Elvis' },
        link: {
          attributes: {
            rel: 'alternate',
            type: 'text/html',
            href: 'https://podcasts.apple.com/us/podcast/about-a-girl/id1540330358?uo=2'
          }
        },
        id: {
          label:
            'https://podcasts.apple.com/us/podcast/about-a-girl/id1540330358?uo=2',
          attributes: { 'im:id': '1540330358' }
        },
        'im:artist': {
          label: 'iHeartPodcasts and Double Elvis',
          attributes: {
            href: 'https://podcasts.apple.com/us/artist/iheartradio/284341002?uo=2'
          }
        },
        category: {
          attributes: {
            'im:id': '1310',
            term: 'Music',
            scheme:
              'https://podcasts.apple.com/us/genre/podcasts-music/id1310?uo=2',
            label: 'Music'
          }
        },
        'im:releaseDate': {
          label: '2023-02-01T00:00:00-07:00',
          attributes: { label: 'February 1, 2023' }
        }
      },
      {
        'im:name': { label: '2F Mixes' },
        'im:image': [
          {
            label:
              'https://is5-ssl.mzstatic.com/image/thumb/Podcasts122/v4/26/84/a4/2684a463-8835-1816-0544-d39a9f8e4dc9/mza_2392300578690130687.jpg/55x55bb.png',
            attributes: { height: '55' }
          },
          {
            label:
              'https://is2-ssl.mzstatic.com/image/thumb/Podcasts122/v4/26/84/a4/2684a463-8835-1816-0544-d39a9f8e4dc9/mza_2392300578690130687.jpg/60x60bb.png',
            attributes: { height: '60' }
          },
          {
            label:
              'https://is5-ssl.mzstatic.com/image/thumb/Podcasts122/v4/26/84/a4/2684a463-8835-1816-0544-d39a9f8e4dc9/mza_2392300578690130687.jpg/170x170bb.png',
            attributes: { height: '170' }
          }
        ],
        summary: { label: 'BBMs by 2F' },
        'im:price': {
          label: 'Get',
          attributes: { amount: '0', currency: 'USD' }
        },
        'im:contentType': { attributes: { term: 'Podcast', label: 'Podcast' } },
        rights: { label: '© Copyright Two Friends' },
        title: { label: '2F Mixes - Two Friends' },
        link: {
          attributes: {
            rel: 'alternate',
            type: 'text/html',
            href: 'https://podcasts.apple.com/us/podcast/2f-mixes/id1047970546?uo=2'
          }
        },
        id: {
          label:
            'https://podcasts.apple.com/us/podcast/2f-mixes/id1047970546?uo=2',
          attributes: { 'im:id': '1047970546' }
        },
        'im:artist': { label: 'Two Friends' },
        category: {
          attributes: {
            'im:id': '1523',
            term: 'Music Commentary',
            scheme:
              'https://podcasts.apple.com/us/genre/podcasts-music-music-commentary/id1523?uo=2',
            label: 'Music Commentary'
          }
        },
        'im:releaseDate': {
          label: '2023-03-06T14:10:00-07:00',
          attributes: { label: 'March 6, 2023' }
        }
      },
      {
        'im:name': { label: 'Nora En Pure - Purified Radio' },
        'im:image': [
          {
            label:
              'https://is5-ssl.mzstatic.com/image/thumb/Podcasts123/v4/b8/c1/ef/b8c1effc-5b18-d66c-3cb1-1006d2c61111/mza_4034407569205460193.jpg/55x55bb.png',
            attributes: { height: '55' }
          },
          {
            label:
              'https://is4-ssl.mzstatic.com/image/thumb/Podcasts123/v4/b8/c1/ef/b8c1effc-5b18-d66c-3cb1-1006d2c61111/mza_4034407569205460193.jpg/60x60bb.png',
            attributes: { height: '60' }
          },
          {
            label:
              'https://is1-ssl.mzstatic.com/image/thumb/Podcasts123/v4/b8/c1/ef/b8c1effc-5b18-d66c-3cb1-1006d2c61111/mza_4034407569205460193.jpg/170x170bb.png',
            attributes: { height: '170' }
          }
        ],
        summary: {
          label:
            '"Purified" Podcasts are being cooked on a weekly basis by Nora En Pure. This product may contain some Enormous ingredients, but mainly organic and funky, chunky elements which may lead to the uncontrollable urge to dance and enjoy life.'
        },
        'im:price': {
          label: 'Get',
          attributes: { amount: '0', currency: 'USD' }
        },
        'im:contentType': { attributes: { term: 'Podcast', label: 'Podcast' } },
        rights: { label: '© NoraEnPure.com' },
        title: { label: 'Nora En Pure - Purified Radio - This Is Distorted' },
        link: {
          attributes: {
            rel: 'alternate',
            type: 'text/html',
            href: 'https://podcasts.apple.com/us/podcast/nora-en-pure-purified-radio/id897935770?uo=2'
          }
        },
        id: {
          label:
            'https://podcasts.apple.com/us/podcast/nora-en-pure-purified-radio/id897935770?uo=2',
          attributes: { 'im:id': '897935770' }
        },
        'im:artist': {
          label: 'This Is Distorted',
          attributes: {
            href: 'https://podcasts.apple.com/us/artist/this-is-distorted/961280048?uo=2'
          }
        },
        category: {
          attributes: {
            'im:id': '1310',
            term: 'Music',
            scheme:
              'https://podcasts.apple.com/us/genre/podcasts-music/id1310?uo=2',
            label: 'Music'
          }
        },
        'im:releaseDate': {
          label: '2023-03-06T01:00:00-07:00',
          attributes: { label: 'March 6, 2023' }
        }
      },
      {
        'im:name': { label: 'Popcast' },
        'im:image': [
          {
            label:
              'https://is5-ssl.mzstatic.com/image/thumb/Podcasts115/v4/0d/00/3d/0d003d69-71dc-54ac-2e49-71344d581ebc/mza_17414366298101550888.jpeg/55x55bb.png',
            attributes: { height: '55' }
          },
          {
            label:
              'https://is4-ssl.mzstatic.com/image/thumb/Podcasts115/v4/0d/00/3d/0d003d69-71dc-54ac-2e49-71344d581ebc/mza_17414366298101550888.jpeg/60x60bb.png',
            attributes: { height: '60' }
          },
          {
            label:
              'https://is2-ssl.mzstatic.com/image/thumb/Podcasts115/v4/0d/00/3d/0d003d69-71dc-54ac-2e49-71344d581ebc/mza_17414366298101550888.jpeg/170x170bb.png',
            attributes: { height: '170' }
          }
        ],
        summary: {
          label:
            'The Popcast is hosted by Jon Caramanica, a pop music critic for The New York Times. It covers the latest in popular music criticism, trends and news.'
        },
        'im:price': {
          label: 'Get',
          attributes: { amount: '0', currency: 'USD' }
        },
        'im:contentType': { attributes: { term: 'Podcast', label: 'Podcast' } },
        rights: { label: '© 2023 The New York Times Company' },
        title: { label: 'Popcast - The New York Times' },
        link: {
          attributes: {
            rel: 'alternate',
            type: 'text/html',
            href: 'https://podcasts.apple.com/us/podcast/popcast/id120315823?uo=2'
          }
        },
        id: {
          label:
            'https://podcasts.apple.com/us/podcast/popcast/id120315823?uo=2',
          attributes: { 'im:id': '120315823' }
        },
        'im:artist': {
          label: 'The New York Times',
          attributes: {
            href: 'https://podcasts.apple.com/us/artist/the-new-york-times/121664449?uo=2'
          }
        },
        category: {
          attributes: {
            'im:id': '1523',
            term: 'Music Commentary',
            scheme:
              'https://podcasts.apple.com/us/genre/podcasts-music-music-commentary/id1523?uo=2',
            label: 'Music Commentary'
          }
        },
        'im:releaseDate': {
          label: '2023-02-18T08:48:00-07:00',
          attributes: { label: 'February 18, 2023' }
        }
      },
      {
        'im:name': { label: 'MusicalSplaining' },
        'im:image': [
          {
            label:
              'https://is4-ssl.mzstatic.com/image/thumb/Podcasts116/v4/a9/34/6b/a9346ba6-70fc-74ef-b85b-fa1540185b81/mza_16205433976667097878.jpeg/55x55bb.png',
            attributes: { height: '55' }
          },
          {
            label:
              'https://is1-ssl.mzstatic.com/image/thumb/Podcasts116/v4/a9/34/6b/a9346ba6-70fc-74ef-b85b-fa1540185b81/mza_16205433976667097878.jpeg/60x60bb.png',
            attributes: { height: '60' }
          },
          {
            label:
              'https://is2-ssl.mzstatic.com/image/thumb/Podcasts116/v4/a9/34/6b/a9346ba6-70fc-74ef-b85b-fa1540185b81/mza_16205433976667097878.jpeg/170x170bb.png',
            attributes: { height: '170' }
          }
        ],
        summary: {
          label: 'A podcast to unite people who love and hate musicals'
        },
        'im:price': {
          label: 'Get',
          attributes: { amount: '0', currency: 'USD' }
        },
        'im:contentType': { attributes: { term: 'Podcast', label: 'Podcast' } },
        rights: { label: '© ©musicalsplaining 2023' },
        title: { label: 'MusicalSplaining - MusicalSplaining' },
        link: {
          attributes: {
            rel: 'alternate',
            type: 'text/html',
            href: 'https://podcasts.apple.com/us/podcast/musicalsplaining/id1497762464?uo=2'
          }
        },
        id: {
          label:
            'https://podcasts.apple.com/us/podcast/musicalsplaining/id1497762464?uo=2',
          attributes: { 'im:id': '1497762464' }
        },
        'im:artist': { label: 'MusicalSplaining' },
        category: {
          attributes: {
            'im:id': '1310',
            term: 'Music',
            scheme:
              'https://podcasts.apple.com/us/genre/podcasts-music/id1310?uo=2',
            label: 'Music'
          }
        },
        'im:releaseDate': {
          label: '2023-03-07T03:00:00-07:00',
          attributes: { label: 'March 7, 2023' }
        }
      },
      {
        'im:name': { label: 'Sticky Notes: The Classical Music Podcast' },
        'im:price': {
          label: 'Get',
          attributes: { amount: '0', currency: 'USD' }
        },
        'im:image': [
          {
            label:
              'https://is4-ssl.mzstatic.com/image/thumb/Podcasts125/v4/58/60/74/58607414-6263-9fa9-4fad-d5879c071643/mza_11208751241845350981.jpeg/55x55bb.png',
            attributes: { height: '55' }
          },
          {
            label:
              'https://is3-ssl.mzstatic.com/image/thumb/Podcasts125/v4/58/60/74/58607414-6263-9fa9-4fad-d5879c071643/mza_11208751241845350981.jpeg/60x60bb.png',
            attributes: { height: '60' }
          },
          {
            label:
              'https://is4-ssl.mzstatic.com/image/thumb/Podcasts125/v4/58/60/74/58607414-6263-9fa9-4fad-d5879c071643/mza_11208751241845350981.jpeg/170x170bb.png',
            attributes: { height: '170' }
          }
        ],
        summary: {
          label:
            "Sticky Notes is a classical music podcast for everyone, whether you are just getting interested in classical music for the first time, or if you've been listening to it and loving it all your life.  Interviews with great artists, in depth looks at pieces in the repertoire, and both basic and deep dives into every era of music.  Classical music is absolutely for everyone, so let's start listening!  Note - Seasons 1-5 will be returning over the next year. They have been taken down in order to be re-recorded in improved sound quality!"
        },
        'im:artist': { label: 'Joshua Weilerstein' },
        title: {
          label:
            'Sticky Notes: The Classical Music Podcast - Joshua Weilerstein'
        },
        link: {
          attributes: {
            rel: 'alternate',
            type: 'text/html',
            href: 'https://podcasts.apple.com/us/podcast/sticky-notes-the-classical-music-podcast/id1215386938?uo=2'
          }
        },
        id: {
          label:
            'https://podcasts.apple.com/us/podcast/sticky-notes-the-classical-music-podcast/id1215386938?uo=2',
          attributes: { 'im:id': '1215386938' }
        },
        'im:contentType': { attributes: { term: 'Podcast', label: 'Podcast' } },
        category: {
          attributes: {
            'im:id': '1310',
            term: 'Music',
            scheme:
              'https://podcasts.apple.com/us/genre/podcasts-music/id1310?uo=2',
            label: 'Music'
          }
        },
        'im:releaseDate': {
          label: '2023-02-23T02:51:00-07:00',
          attributes: { label: 'February 23, 2023' }
        }
      },
      {
        'im:name': { label: 'The Zane Lowe Interview Series' },
        'im:image': [
          {
            label:
              'https://is5-ssl.mzstatic.com/image/thumb/Podcasts125/v4/63/04/7e/63047ee3-1420-8ccc-3e5d-ee66f80e2f0b/mza_13896228868433996228.jpeg/55x55bb.png',
            attributes: { height: '55' }
          },
          {
            label:
              'https://is4-ssl.mzstatic.com/image/thumb/Podcasts125/v4/63/04/7e/63047ee3-1420-8ccc-3e5d-ee66f80e2f0b/mza_13896228868433996228.jpeg/60x60bb.png',
            attributes: { height: '60' }
          },
          {
            label:
              'https://is1-ssl.mzstatic.com/image/thumb/Podcasts125/v4/63/04/7e/63047ee3-1420-8ccc-3e5d-ee66f80e2f0b/mza_13896228868433996228.jpeg/170x170bb.png',
            attributes: { height: '170' }
          }
        ],
        summary: {
          label:
            "One thing that today's biggest artists have in common: They all speak with Apple Music’s Zane Lowe about their lives and the stories behind their songs. Hear why he is the interviewer the biggest stars open up to in these candid, in-depth conversations, now available in full on Apple Podcasts."
        },
        'im:price': {
          label: 'Get',
          attributes: { amount: '0', currency: 'USD' }
        },
        'im:contentType': { attributes: { term: 'Podcast', label: 'Podcast' } },
        rights: { label: '© 2020 Apple Inc.' },
        title: { label: 'The Zane Lowe Interview Series - Apple Music' },
        link: {
          attributes: {
            rel: 'alternate',
            type: 'text/html',
            href: 'https://podcasts.apple.com/us/podcast/the-zane-lowe-interview-series/id1461515071?uo=2'
          }
        },
        id: {
          label:
            'https://podcasts.apple.com/us/podcast/the-zane-lowe-interview-series/id1461515071?uo=2',
          attributes: { 'im:id': '1461515071' }
        },
        'im:artist': {
          label: 'Apple Music',
          attributes: {
            href: 'https://podcasts.apple.com/us/artist/apple-music/1513466631?uo=2'
          }
        },
        category: {
          attributes: {
            'im:id': '1525',
            term: 'Music Interviews',
            scheme:
              'https://podcasts.apple.com/us/genre/podcasts-music-music-interviews/id1525?uo=2',
            label: 'Music Interviews'
          }
        },
        'im:releaseDate': {
          label: '2023-02-23T12:43:00-07:00',
          attributes: { label: 'February 23, 2023' }
        }
      },
      {
        'im:name': { label: 'No Dogs in Space' },
        'im:price': {
          label: 'Get',
          attributes: { amount: '0', currency: 'USD' }
        },
        'im:image': [
          {
            label:
              'https://is5-ssl.mzstatic.com/image/thumb/Podcasts116/v4/8c/e0/ae/8ce0aeb3-63e8-bbca-bbd1-5f7b5203a6c4/mza_7154583126326695520.jpg/55x55bb.png',
            attributes: { height: '55' }
          },
          {
            label:
              'https://is2-ssl.mzstatic.com/image/thumb/Podcasts116/v4/8c/e0/ae/8ce0aeb3-63e8-bbca-bbd1-5f7b5203a6c4/mza_7154583126326695520.jpg/60x60bb.png',
            attributes: { height: '60' }
          },
          {
            label:
              'https://is1-ssl.mzstatic.com/image/thumb/Podcasts116/v4/8c/e0/ae/8ce0aeb3-63e8-bbca-bbd1-5f7b5203a6c4/mza_7154583126326695520.jpg/170x170bb.png',
            attributes: { height: '170' }
          }
        ],
        summary: {
          label:
            'No Dogs In Space is a music history podcast featuring Marcus Parks and Carolina Hidalgo of the Last Podcast Network. \nSeason 1 - Punk \nSeason 2 - Alternative'
        },
        'im:artist': { label: 'The Last Podcast Network' },
        title: { label: 'No Dogs in Space - The Last Podcast Network' },
        link: {
          attributes: {
            rel: 'alternate',
            type: 'text/html',
            href: 'https://podcasts.apple.com/us/podcast/no-dogs-in-space/id1495604041?uo=2'
          }
        },
        id: {
          label:
            'https://podcasts.apple.com/us/podcast/no-dogs-in-space/id1495604041?uo=2',
          attributes: { 'im:id': '1495604041' }
        },
        'im:contentType': { attributes: { term: 'Podcast', label: 'Podcast' } },
        category: {
          attributes: {
            'im:id': '1524',
            term: 'Music History',
            scheme:
              'https://podcasts.apple.com/us/genre/podcasts-music-music-history/id1524?uo=2',
            label: 'Music History'
          }
        },
        'im:releaseDate': {
          label: '2022-12-21T21:56:00-07:00',
          attributes: { label: 'December 21, 2022' }
        }
      },
      {
        'im:name': { label: "DJ Private Ryan's Podcast" },
        'im:price': {
          label: 'Get',
          attributes: { amount: '0', currency: 'USD' }
        },
        'im:image': [
          {
            label:
              'https://is4-ssl.mzstatic.com/image/thumb/Podcasts126/v4/db/e2/ed/dbe2ed8c-bc61-6c16-b864-3e74249a1ea3/mza_11966267613834431395.jpg/55x55bb.png',
            attributes: { height: '55' }
          },
          {
            label:
              'https://is3-ssl.mzstatic.com/image/thumb/Podcasts126/v4/db/e2/ed/dbe2ed8c-bc61-6c16-b864-3e74249a1ea3/mza_11966267613834431395.jpg/60x60bb.png',
            attributes: { height: '60' }
          },
          {
            label:
              'https://is5-ssl.mzstatic.com/image/thumb/Podcasts126/v4/db/e2/ed/dbe2ed8c-bc61-6c16-b864-3e74249a1ea3/mza_11966267613834431395.jpg/170x170bb.png',
            attributes: { height: '170' }
          }
        ],
        summary: {
          label:
            'TRINIDAD | TOBAGO | MIAMI | WASHINGTON DC| HOUSTON | JAMAICA | NY | ATLANTA | LONDON       |                        \n\nRIGHT CLICK THE DIRECT DOWNLOAD LINK TO DOWLOAD THE MIXES. SELECT SAVE AS/SAVE TARGET AS/DOWNLOAD LINKED FILE'
        },
        'im:artist': { label: 'DJ Private Ryan' },
        title: { label: "DJ Private Ryan's Podcast - DJ Private Ryan" },
        link: {
          attributes: {
            rel: 'alternate',
            type: 'text/html',
            href: 'https://podcasts.apple.com/us/podcast/dj-private-ryans-podcast/id571304212?uo=2'
          }
        },
        id: {
          label:
            'https://podcasts.apple.com/us/podcast/dj-private-ryans-podcast/id571304212?uo=2',
          attributes: { 'im:id': '571304212' }
        },
        'im:contentType': { attributes: { term: 'Podcast', label: 'Podcast' } },
        category: {
          attributes: {
            'im:id': '1310',
            term: 'Music',
            scheme:
              'https://podcasts.apple.com/us/genre/podcasts-music/id1310?uo=2',
            label: 'Music'
          }
        },
        'im:releaseDate': {
          label: '2023-02-10T05:51:00-07:00',
          attributes: { label: 'February 10, 2023' }
        }
      },
      {
        'im:name': { label: 'Rolling Stone Music Now' },
        'im:image': [
          {
            label:
              'https://is5-ssl.mzstatic.com/image/thumb/Podcasts116/v4/b8/9f/1a/b89f1a6c-1e99-4ca9-6c00-00306ff7cfde/mza_17202491009372242583.jpeg/55x55bb.png',
            attributes: { height: '55' }
          },
          {
            label:
              'https://is4-ssl.mzstatic.com/image/thumb/Podcasts116/v4/b8/9f/1a/b89f1a6c-1e99-4ca9-6c00-00306ff7cfde/mza_17202491009372242583.jpeg/60x60bb.png',
            attributes: { height: '60' }
          },
          {
            label:
              'https://is3-ssl.mzstatic.com/image/thumb/Podcasts116/v4/b8/9f/1a/b89f1a6c-1e99-4ca9-6c00-00306ff7cfde/mza_17202491009372242583.jpeg/170x170bb.png',
            attributes: { height: '170' }
          }
        ],
        summary: {
          label:
            'Inside the biggest stories in music, hosted by Rolling Stone senior writer Brian Hiatt. Featuring interviews with top artists, expert insight on new releases and breaking news from the Rolling Stone staff, and much more.'
        },
        'im:price': {
          label: 'Get',
          attributes: { amount: '0', currency: 'USD' }
        },
        'im:contentType': { attributes: { term: 'Podcast', label: 'Podcast' } },
        rights: { label: '℗ & © 2022 Rolling Stone' },
        title: {
          label:
            'Rolling Stone Music Now - Rolling Stone | Cumulus Podcast Network'
        },
        link: {
          attributes: {
            rel: 'alternate',
            type: 'text/html',
            href: 'https://podcasts.apple.com/us/podcast/rolling-stone-music-now/id1078431985?uo=2'
          }
        },
        id: {
          label:
            'https://podcasts.apple.com/us/podcast/rolling-stone-music-now/id1078431985?uo=2',
          attributes: { 'im:id': '1078431985' }
        },
        'im:artist': {
          label: 'Rolling Stone | Cumulus Podcast Network',
          attributes: {
            href: 'https://podcasts.apple.com/us/artist/rolling-stone/1078490041?uo=2'
          }
        },
        category: {
          attributes: {
            'im:id': '1523',
            term: 'Music Commentary',
            scheme:
              'https://podcasts.apple.com/us/genre/podcasts-music-music-commentary/id1523?uo=2',
            label: 'Music Commentary'
          }
        },
        'im:releaseDate': {
          label: '2023-02-19T15:39:00-07:00',
          attributes: { label: 'February 19, 2023' }
        }
      },
      {
        'im:name': { label: 'The Liturgy of the Hours: Sing the Hours' },
        'im:image': [
          {
            label:
              'https://is2-ssl.mzstatic.com/image/thumb/Podcasts115/v4/75/cb/8b/75cb8be5-4446-531a-801d-fdde5be695cd/mza_7970404805615242094.png/55x55bb.png',
            attributes: { height: '55' }
          },
          {
            label:
              'https://is4-ssl.mzstatic.com/image/thumb/Podcasts115/v4/75/cb/8b/75cb8be5-4446-531a-801d-fdde5be695cd/mza_7970404805615242094.png/60x60bb.png',
            attributes: { height: '60' }
          },
          {
            label:
              'https://is4-ssl.mzstatic.com/image/thumb/Podcasts115/v4/75/cb/8b/75cb8be5-4446-531a-801d-fdde5be695cd/mza_7970404805615242094.png/170x170bb.png',
            attributes: { height: '170' }
          }
        ],
        summary: {
          label:
            'Join for morning (Lauds) and evening (Vespers) prayer. All Hymns, Psalms, and Prayer sung.'
        },
        'im:price': {
          label: 'Get',
          attributes: { amount: '0', currency: 'USD' }
        },
        'im:contentType': { attributes: { term: 'Podcast', label: 'Podcast' } },
        rights: { label: '© 2020' },
        title: {
          label: 'The Liturgy of the Hours: Sing the Hours - Paul Rose'
        },
        link: {
          attributes: {
            rel: 'alternate',
            type: 'text/html',
            href: 'https://podcasts.apple.com/us/podcast/the-liturgy-of-the-hours-sing-the-hours/id1544170650?uo=2'
          }
        },
        id: {
          label:
            'https://podcasts.apple.com/us/podcast/the-liturgy-of-the-hours-sing-the-hours/id1544170650?uo=2',
          attributes: { 'im:id': '1544170650' }
        },
        'im:artist': { label: 'Paul Rose' },
        category: {
          attributes: {
            'im:id': '1310',
            term: 'Music',
            scheme:
              'https://podcasts.apple.com/us/genre/podcasts-music/id1310?uo=2',
            label: 'Music'
          }
        },
        'im:releaseDate': {
          label: '2023-03-07T07:00:00-07:00',
          attributes: { label: 'March 7, 2023' }
        }
      },
      {
        'im:name': { label: 'Tiny Desk Concerts - Audio' },
        'im:image': [
          {
            label:
              'https://is5-ssl.mzstatic.com/image/thumb/Podcasts122/v4/f9/17/1d/f9171d1f-17f5-f738-6bcb-e474a642ce6f/mza_15427398202374447947.jpg/55x55bb.png',
            attributes: { height: '55' }
          },
          {
            label:
              'https://is4-ssl.mzstatic.com/image/thumb/Podcasts122/v4/f9/17/1d/f9171d1f-17f5-f738-6bcb-e474a642ce6f/mza_15427398202374447947.jpg/60x60bb.png',
            attributes: { height: '60' }
          },
          {
            label:
              'https://is3-ssl.mzstatic.com/image/thumb/Podcasts122/v4/f9/17/1d/f9171d1f-17f5-f738-6bcb-e474a642ce6f/mza_15427398202374447947.jpg/170x170bb.png',
            attributes: { height: '170' }
          }
        ],
        summary: {
          label:
            "Tiny Desk Concerts from NPR Music feature your favorite musicians performing at All Songs Considered host Bob Boilen's desk in the NPR office. Hear Wilco, Adele, Passion Pit, Tinariwen, Miguel, The xx and many more. This is the audio version of the podcast. A video version is also available."
        },
        'im:price': {
          label: 'Get',
          attributes: { amount: '0', currency: 'USD' }
        },
        'im:contentType': { attributes: { term: 'Podcast', label: 'Podcast' } },
        rights: { label: '© Copyright 2013-2021 NPR - For Personal Use Only' },
        title: { label: 'Tiny Desk Concerts - Audio - NPR' },
        link: {
          attributes: {
            rel: 'alternate',
            type: 'text/html',
            href: 'https://podcasts.apple.com/us/podcast/tiny-desk-concerts-audio/id657476401?uo=2'
          }
        },
        id: {
          label:
            'https://podcasts.apple.com/us/podcast/tiny-desk-concerts-audio/id657476401?uo=2',
          attributes: { 'im:id': '657476401' }
        },
        'im:artist': {
          label: 'NPR',
          attributes: {
            href: 'https://podcasts.apple.com/us/artist/npr/125443881?uo=2'
          }
        },
        category: {
          attributes: {
            'im:id': '1310',
            term: 'Music',
            scheme:
              'https://podcasts.apple.com/us/genre/podcasts-music/id1310?uo=2',
            label: 'Music'
          }
        },
        'im:releaseDate': {
          label: '2022-04-14T02:00:00-07:00',
          attributes: { label: 'April 14, 2022' }
        }
      },
      {
        'im:name': { label: 'Friday Night Karaoke' },
        'im:image': [
          {
            label:
              'https://is1-ssl.mzstatic.com/image/thumb/Podcasts116/v4/5b/88/a1/5b88a186-ce6a-5268-cc49-8e896c737729/mza_7354436562524572096.jpg/55x55bb.png',
            attributes: { height: '55' }
          },
          {
            label:
              'https://is5-ssl.mzstatic.com/image/thumb/Podcasts116/v4/5b/88/a1/5b88a186-ce6a-5268-cc49-8e896c737729/mza_7354436562524572096.jpg/60x60bb.png',
            attributes: { height: '60' }
          },
          {
            label:
              'https://is5-ssl.mzstatic.com/image/thumb/Podcasts116/v4/5b/88/a1/5b88a186-ce6a-5268-cc49-8e896c737729/mza_7354436562524572096.jpg/170x170bb.png',
            attributes: { height: '170' }
          }
        ],
        summary: {
          label:
            'No ads, no gimmicks - just Karaoke! Friday Night Karaoke features amateur artists every week singing the songs they love, just for you! Get your weekly dose of vocal expression. Get featured on the podcast by joining the official Friday Night Karaoke Facebook group at https://www.facebook.com/groups/fridaynightkaraoke!'
        },
        'im:price': {
          label: 'Get',
          attributes: { amount: '0', currency: 'USD' }
        },
        'im:contentType': { attributes: { term: 'Podcast', label: 'Podcast' } },
        rights: { label: '© Copyright Friday Night Karaoke' },
        title: { label: 'Friday Night Karaoke - Friday Night Karaoke' },
        link: {
          attributes: {
            rel: 'alternate',
            type: 'text/html',
            href: 'https://podcasts.apple.com/us/podcast/friday-night-karaoke/id1574029840?uo=2'
          }
        },
        id: {
          label:
            'https://podcasts.apple.com/us/podcast/friday-night-karaoke/id1574029840?uo=2',
          attributes: { 'im:id': '1574029840' }
        },
        'im:artist': { label: 'Friday Night Karaoke' },
        category: {
          attributes: {
            'im:id': '1310',
            term: 'Music',
            scheme:
              'https://podcasts.apple.com/us/genre/podcasts-music/id1310?uo=2',
            label: 'Music'
          }
        },
        'im:releaseDate': {
          label: '2023-02-05T17:04:00-07:00',
          attributes: { label: 'February 5, 2023' }
        }
      },
      {
        'im:name': { label: 'HardLore: Stories from Tour' },
        'im:image': [
          {
            label:
              'https://is3-ssl.mzstatic.com/image/thumb/Podcasts113/v4/c5/87/6f/c5876f84-ec24-c9e7-4b5a-2ec91039387f/mza_1146158443120468397.jpg/55x55bb.png',
            attributes: { height: '55' }
          },
          {
            label:
              'https://is5-ssl.mzstatic.com/image/thumb/Podcasts113/v4/c5/87/6f/c5876f84-ec24-c9e7-4b5a-2ec91039387f/mza_1146158443120468397.jpg/60x60bb.png',
            attributes: { height: '60' }
          },
          {
            label:
              'https://is4-ssl.mzstatic.com/image/thumb/Podcasts113/v4/c5/87/6f/c5876f84-ec24-c9e7-4b5a-2ec91039387f/mza_1146158443120468397.jpg/170x170bb.png',
            attributes: { height: '170' }
          }
        ],
        summary: {
          label:
            "The most chaotic stories from touring life are discussed with weekly guests and hosts Colin Young (God's Hate) & Bo Lueders (Harms Way)."
        },
        'im:price': {
          label: 'Get',
          attributes: { amount: '0', currency: 'USD' }
        },
        'im:contentType': { attributes: { term: 'Podcast', label: 'Podcast' } },
        rights: { label: '© 2022 Knotfest' },
        title: {
          label:
            'HardLore: Stories from Tour - Colin Young, Bo Lueders, Knotfest'
        },
        link: {
          attributes: {
            rel: 'alternate',
            type: 'text/html',
            href: 'https://podcasts.apple.com/us/podcast/hardlore-stories-from-tour/id1621352294?uo=2'
          }
        },
        id: {
          label:
            'https://podcasts.apple.com/us/podcast/hardlore-stories-from-tour/id1621352294?uo=2',
          attributes: { 'im:id': '1621352294' }
        },
        'im:artist': { label: 'Colin Young, Bo Lueders, Knotfest' },
        category: {
          attributes: {
            'im:id': '1524',
            term: 'Music History',
            scheme:
              'https://podcasts.apple.com/us/genre/podcasts-music-music-history/id1524?uo=2',
            label: 'Music History'
          }
        },
        'im:releaseDate': {
          label: '2023-03-02T04:00:00-07:00',
          attributes: { label: 'March 2, 2023' }
        }
      },
      {
        'im:name': { label: 'The LoPriore Podcast' },
        'im:image': [
          {
            label:
              'https://is5-ssl.mzstatic.com/image/thumb/Podcasts126/v4/f0/2a/e1/f02ae14f-1864-3feb-eb82-d48f1f0dd9cc/mza_3769234778234005439.jpeg/55x55bb.png',
            attributes: { height: '55' }
          },
          {
            label:
              'https://is2-ssl.mzstatic.com/image/thumb/Podcasts126/v4/f0/2a/e1/f02ae14f-1864-3feb-eb82-d48f1f0dd9cc/mza_3769234778234005439.jpeg/60x60bb.png',
            attributes: { height: '60' }
          },
          {
            label:
              'https://is2-ssl.mzstatic.com/image/thumb/Podcasts126/v4/f0/2a/e1/f02ae14f-1864-3feb-eb82-d48f1f0dd9cc/mza_3769234778234005439.jpeg/170x170bb.png',
            attributes: { height: '170' }
          }
        ],
        summary: {
          label:
            "Brothers Michael & Danny LoPriore have set out the make the funniest podcast of all time and have settled for this. Join them on their infinite quest for podcast supremacy as they spare the lives of no one who crosses them. If you don't listen to this show, something is wrong with you, not them, figure your life out bro."
        },
        'im:price': {
          label: 'Get',
          attributes: { amount: '0', currency: 'USD' }
        },
        'im:contentType': { attributes: { term: 'Podcast', label: 'Podcast' } },
        rights: { label: '© LoPriore LLC.' },
        title: { label: 'The LoPriore Podcast - Danny D LoPriore' },
        link: {
          attributes: {
            rel: 'alternate',
            type: 'text/html',
            href: 'https://podcasts.apple.com/us/podcast/the-lopriore-podcast/id1550884342?uo=2'
          }
        },
        id: {
          label:
            'https://podcasts.apple.com/us/podcast/the-lopriore-podcast/id1550884342?uo=2',
          attributes: { 'im:id': '1550884342' }
        },
        'im:artist': { label: 'Danny D LoPriore' },
        category: {
          attributes: {
            'im:id': '1310',
            term: 'Music',
            scheme:
              'https://podcasts.apple.com/us/genre/podcasts-music/id1310?uo=2',
            label: 'Music'
          }
        },
        'im:releaseDate': {
          label: '2023-03-07T04:00:00-07:00',
          attributes: { label: 'March 7, 2023' }
        }
      },
      {
        'im:name': { label: 'Back on Figg' },
        'im:price': {
          label: 'Get',
          attributes: { amount: '0', currency: 'USD' }
        },
        'im:image': [
          {
            label:
              'https://is1-ssl.mzstatic.com/image/thumb/Podcasts112/v4/cd/82/0c/cd820cfe-fce5-56aa-ef2c-da67576fd4b3/mza_3363134633883714623.jpeg/55x55bb.png',
            attributes: { height: '55' }
          },
          {
            label:
              'https://is3-ssl.mzstatic.com/image/thumb/Podcasts112/v4/cd/82/0c/cd820cfe-fce5-56aa-ef2c-da67576fd4b3/mza_3363134633883714623.jpeg/60x60bb.png',
            attributes: { height: '60' }
          },
          {
            label:
              'https://is2-ssl.mzstatic.com/image/thumb/Podcasts112/v4/cd/82/0c/cd820cfe-fce5-56aa-ef2c-da67576fd4b3/mza_3363134633883714623.jpeg/170x170bb.png',
            attributes: { height: '170' }
          }
        ],
        summary: {
          label:
            'Back on Fig Twitch/Youtube Live Stream. Hosts T-Rell and Smacc'
        },
        'im:artist': { label: 'T-Rell Meeks' },
        title: { label: 'Back on Figg - T-Rell Meeks' },
        link: {
          attributes: {
            rel: 'alternate',
            type: 'text/html',
            href: 'https://podcasts.apple.com/us/podcast/back-on-figg/id1658497449?uo=2'
          }
        },
        id: {
          label:
            'https://podcasts.apple.com/us/podcast/back-on-figg/id1658497449?uo=2',
          attributes: { 'im:id': '1658497449' }
        },
        'im:contentType': { attributes: { term: 'Podcast', label: 'Podcast' } },
        category: {
          attributes: {
            'im:id': '1525',
            term: 'Music Interviews',
            scheme:
              'https://podcasts.apple.com/us/genre/podcasts-music-music-interviews/id1525?uo=2',
            label: 'Music Interviews'
          }
        },
        'im:releaseDate': {
          label: '2023-03-04T03:57:00-07:00',
          attributes: { label: 'March 4, 2023' }
        }
      },
      {
        'im:name': { label: 'Hit Parade | Music History and Music Trivia' },
        'im:image': [
          {
            label:
              'https://is4-ssl.mzstatic.com/image/thumb/Podcasts126/v4/c2/7e/31/c27e3183-c893-8592-71e5-1fe12f9c7a1b/mza_4571331444040512573.jpg/55x55bb.png',
            attributes: { height: '55' }
          },
          {
            label:
              'https://is3-ssl.mzstatic.com/image/thumb/Podcasts126/v4/c2/7e/31/c27e3183-c893-8592-71e5-1fe12f9c7a1b/mza_4571331444040512573.jpg/60x60bb.png',
            attributes: { height: '60' }
          },
          {
            label:
              'https://is5-ssl.mzstatic.com/image/thumb/Podcasts126/v4/c2/7e/31/c27e3183-c893-8592-71e5-1fe12f9c7a1b/mza_4571331444040512573.jpg/170x170bb.png',
            attributes: { height: '170' }
          }
        ],
        summary: {
          label:
            'What makes a song a smash? Talent? Luck? Timing? All that—and more. Chris Molanphy, pop-chart analyst and author of Slate’s “Why Is This Song No. 1?” series, tells tales from a half-century of chart history. Through storytelling, trivia and song snippets, Chris dissects how that song you love—or hate—dominated the airwaves, made its way to the top of the charts and shaped your memories forever.'
        },
        'im:price': {
          label: 'Get',
          attributes: { amount: '0', currency: 'USD' }
        },
        'im:contentType': { attributes: { term: 'Podcast', label: 'Podcast' } },
        rights: { label: '© 2018 The Slate Group' },
        title: {
          label: 'Hit Parade | Music History and Music Trivia - Slate Podcasts'
        },
        link: {
          attributes: {
            rel: 'alternate',
            type: 'text/html',
            href: 'https://podcasts.apple.com/us/podcast/hit-parade-music-history-and-music-trivia/id1291058235?uo=2'
          }
        },
        id: {
          label:
            'https://podcasts.apple.com/us/podcast/hit-parade-music-history-and-music-trivia/id1291058235?uo=2',
          attributes: { 'im:id': '1291058235' }
        },
        'im:artist': {
          label: 'Slate Podcasts',
          attributes: {
            href: 'https://podcasts.apple.com/us/artist/slate-magazine/155753899?uo=2'
          }
        },
        category: {
          attributes: {
            'im:id': '1524',
            term: 'Music History',
            scheme:
              'https://podcasts.apple.com/us/genre/podcasts-music-music-history/id1524?uo=2',
            label: 'Music History'
          }
        },
        'im:releaseDate': {
          label: '2023-02-24T16:00:00-07:00',
          attributes: { label: 'February 24, 2023' }
        }
      },
      {
        'im:name': { label: 'Gaucho Amigos' },
        'im:image': [
          {
            label:
              'https://is1-ssl.mzstatic.com/image/thumb/Podcasts116/v4/2b/93/04/2b930479-1e02-4b7a-507d-5f63b5325cc3/mza_4002133886124614734.jpeg/55x55bb.png',
            attributes: { height: '55' }
          },
          {
            label:
              'https://is5-ssl.mzstatic.com/image/thumb/Podcasts116/v4/2b/93/04/2b930479-1e02-4b7a-507d-5f63b5325cc3/mza_4002133886124614734.jpeg/60x60bb.png',
            attributes: { height: '60' }
          },
          {
            label:
              'https://is5-ssl.mzstatic.com/image/thumb/Podcasts116/v4/2b/93/04/2b930479-1e02-4b7a-507d-5f63b5325cc3/mza_4002133886124614734.jpeg/170x170bb.png',
            attributes: { height: '170' }
          }
        ],
        summary: { label: 'An Oral History of Steely Dan' },
        'im:price': {
          label: 'Get',
          attributes: { amount: '0', currency: 'USD' }
        },
        'im:contentType': { attributes: { term: 'Podcast', label: 'Podcast' } },
        rights: { label: '© 2023 Gaucho Amigos' },
        title: { label: 'Gaucho Amigos - A Steely Dan Podcast' },
        link: {
          attributes: {
            rel: 'alternate',
            type: 'text/html',
            href: 'https://podcasts.apple.com/us/podcast/gaucho-amigos/id1676094378?uo=2'
          }
        },
        id: {
          label:
            'https://podcasts.apple.com/us/podcast/gaucho-amigos/id1676094378?uo=2',
          attributes: { 'im:id': '1676094378' }
        },
        'im:artist': { label: 'A Steely Dan Podcast' },
        category: {
          attributes: {
            'im:id': '1524',
            term: 'Music History',
            scheme:
              'https://podcasts.apple.com/us/genre/podcasts-music-music-history/id1524?uo=2',
            label: 'Music History'
          }
        },
        'im:releaseDate': {
          label: '2023-03-07T06:00:00-07:00',
          attributes: { label: 'March 7, 2023' }
        }
      },
      {
        'im:name': { label: 'Sound Opinions' },
        'im:image': [
          {
            label:
              'https://is1-ssl.mzstatic.com/image/thumb/Podcasts116/v4/0c/33/37/0c33378b-7294-5931-e10e-100270daa2e9/mza_15317762576301889675.jpg/55x55bb.png',
            attributes: { height: '55' }
          },
          {
            label:
              'https://is3-ssl.mzstatic.com/image/thumb/Podcasts116/v4/0c/33/37/0c33378b-7294-5931-e10e-100270daa2e9/mza_15317762576301889675.jpg/60x60bb.png',
            attributes: { height: '60' }
          },
          {
            label:
              'https://is1-ssl.mzstatic.com/image/thumb/Podcasts116/v4/0c/33/37/0c33378b-7294-5931-e10e-100270daa2e9/mza_15317762576301889675.jpg/170x170bb.png',
            attributes: { height: '170' }
          }
        ],
        summary: {
          label:
            'Take two nationally respected rock critics, the latest music news, personal commentary, and exclusive interviews and performances, add a huge pile of records old and new, and the result is Sound Opinions, where people who love music can come together.'
        },
        'im:price': {
          label: 'Get',
          attributes: { amount: '0', currency: 'USD' }
        },
        'im:contentType': { attributes: { term: 'Podcast', label: 'Podcast' } },
        rights: { label: '© 2023 Sound Opinions' },
        title: { label: 'Sound Opinions - Sound Opinions' },
        link: {
          attributes: {
            rel: 'alternate',
            type: 'text/html',
            href: 'https://podcasts.apple.com/us/podcast/sound-opinions/id94793843?uo=2'
          }
        },
        id: {
          label:
            'https://podcasts.apple.com/us/podcast/sound-opinions/id94793843?uo=2',
          attributes: { 'im:id': '94793843' }
        },
        'im:artist': {
          label: 'Sound Opinions',
          attributes: {
            href: 'https://podcasts.apple.com/us/artist/wbez/364380278?uo=2'
          }
        },
        category: {
          attributes: {
            'im:id': '1310',
            term: 'Music',
            scheme:
              'https://podcasts.apple.com/us/genre/podcasts-music/id1310?uo=2',
            label: 'Music'
          }
        },
        'im:releaseDate': {
          label: '2023-03-02T22:00:00-07:00',
          attributes: { label: 'March 2, 2023' }
        }
      },
      {
        'im:name': { label: '13: A Taylor Swift Fan Podcast' },
        'im:image': [
          {
            label:
              'https://is3-ssl.mzstatic.com/image/thumb/Podcasts114/v4/79/c8/d2/79c8d2b2-5d5a-365c-a067-8bcefc01d2db/mza_16543696634515633376.jpg/55x55bb.png',
            attributes: { height: '55' }
          },
          {
            label:
              'https://is2-ssl.mzstatic.com/image/thumb/Podcasts114/v4/79/c8/d2/79c8d2b2-5d5a-365c-a067-8bcefc01d2db/mza_16543696634515633376.jpg/60x60bb.png',
            attributes: { height: '60' }
          },
          {
            label:
              'https://is4-ssl.mzstatic.com/image/thumb/Podcasts114/v4/79/c8/d2/79c8d2b2-5d5a-365c-a067-8bcefc01d2db/mza_16543696634515633376.jpg/170x170bb.png',
            attributes: { height: '170' }
          }
        ],
        summary: {
          label:
            '“13: A Taylor Swift Fan Podcast” is a deep dive into everything Taylor Swift. Who is that song about? How does she connect so many songs together? Which scandal was she singing about there? From “Tim McGraw” to “It’s Time to Go,” follow along as four Swifties break down every. single. song. Taylor has ever written, and have a lot of fun along the way!\n \nSubscribe for free with new episodes every Tuesday. Follow the show on Instagram &  TikTok @the13podcast.'
        },
        'im:price': {
          label: 'Get',
          attributes: { amount: '0', currency: 'USD' }
        },
        'im:contentType': { attributes: { term: 'Podcast', label: 'Podcast' } },
        rights: { label: '© KiddNation' },
        title: { label: '13: A Taylor Swift Fan Podcast - KiddNation' },
        link: {
          attributes: {
            rel: 'alternate',
            type: 'text/html',
            href: 'https://podcasts.apple.com/us/podcast/13-a-taylor-swift-fan-podcast/id1561635433?uo=2'
          }
        },
        id: {
          label:
            'https://podcasts.apple.com/us/podcast/13-a-taylor-swift-fan-podcast/id1561635433?uo=2',
          attributes: { 'im:id': '1561635433' }
        },
        'im:artist': { label: 'KiddNation' },
        category: {
          attributes: {
            'im:id': '1310',
            term: 'Music',
            scheme:
              'https://podcasts.apple.com/us/genre/podcasts-music/id1310?uo=2',
            label: 'Music'
          }
        },
        'im:releaseDate': {
          label: '2023-02-28T08:38:00-07:00',
          attributes: { label: 'February 28, 2023' }
        }
      },
      {
        'im:name': { label: 'Nothing Is Real - A Beatles Podcast' },
        'im:image': [
          {
            label:
              'https://is4-ssl.mzstatic.com/image/thumb/Podcasts126/v4/0f/6e/2a/0f6e2ac5-ca11-7eae-0214-8fc184f3ecb6/mza_6724419993007030444.png/55x55bb.png',
            attributes: { height: '55' }
          },
          {
            label:
              'https://is1-ssl.mzstatic.com/image/thumb/Podcasts126/v4/0f/6e/2a/0f6e2ac5-ca11-7eae-0214-8fc184f3ecb6/mza_6724419993007030444.png/60x60bb.png',
            attributes: { height: '60' }
          },
          {
            label:
              'https://is2-ssl.mzstatic.com/image/thumb/Podcasts126/v4/0f/6e/2a/0f6e2ac5-ca11-7eae-0214-8fc184f3ecb6/mza_6724419993007030444.png/170x170bb.png',
            attributes: { height: '170' }
          }
        ],
        summary: {
          label:
            '50 years on, the world is still in love with The Beatles. Join Nothing Is Real hosts Jason Carty & Steven Cockcroft as they continue the never-ending conversation about the greatest band the world has ever known. Each episode puts a tiny piece of the Beatles story under the microscope to try and make sense of it all. Coming at you live, on tape, from Dublin. Weekly.\n414227\nSupport this show http://supporter.acast.com/nothing-is-real-a-beatles-podcast.\n \nBecome a member at https://plus.acast.com/s/nothing-is-real-a-beatles-podcast.\n\n\n\n Hosted on Acast. See acast.com/privacy for more information.'
        },
        'im:price': {
          label: 'Get',
          attributes: { amount: '0', currency: 'USD' }
        },
        'im:contentType': { attributes: { term: 'Podcast', label: 'Podcast' } },
        rights: { label: '© 414227' },
        title: { label: 'Nothing Is Real - A Beatles Podcast - Beatles Pod' },
        link: {
          attributes: {
            rel: 'alternate',
            type: 'text/html',
            href: 'https://podcasts.apple.com/us/podcast/nothing-is-real-a-beatles-podcast/id1462587848?uo=2'
          }
        },
        id: {
          label:
            'https://podcasts.apple.com/us/podcast/nothing-is-real-a-beatles-podcast/id1462587848?uo=2',
          attributes: { 'im:id': '1462587848' }
        },
        'im:artist': { label: 'Beatles Pod' },
        category: {
          attributes: {
            'im:id': '1310',
            term: 'Music',
            scheme:
              'https://podcasts.apple.com/us/genre/podcasts-music/id1310?uo=2',
            label: 'Music'
          }
        },
        'im:releaseDate': {
          label: '2023-02-28T16:01:00-07:00',
          attributes: { label: 'February 28, 2023' }
        }
      },
      {
        'im:name': { label: 'Behind the Song' },
        'im:image': [
          {
            label:
              'https://is3-ssl.mzstatic.com/image/thumb/Podcasts113/v4/f4/a0/74/f4a074c1-9cb6-1987-18a6-d14233a79926/mza_16204142026958423803.jpg/55x55bb.png',
            attributes: { height: '55' }
          },
          {
            label:
              'https://is5-ssl.mzstatic.com/image/thumb/Podcasts113/v4/f4/a0/74/f4a074c1-9cb6-1987-18a6-d14233a79926/mza_16204142026958423803.jpg/60x60bb.png',
            attributes: { height: '60' }
          },
          {
            label:
              'https://is5-ssl.mzstatic.com/image/thumb/Podcasts113/v4/f4/a0/74/f4a074c1-9cb6-1987-18a6-d14233a79926/mza_16204142026958423803.jpg/170x170bb.png',
            attributes: { height: '170' }
          }
        ],
        summary: {
          label:
            'Dig deep into the lyrics of classic rock songs and the storytellers that created them in "Behind The Song," a podcast by The Drive\'s Janda Lane. Hear what was happening behind the scenes while some of the most iconic songs in rock history were being written.'
        },
        'im:price': {
          label: 'Get',
          attributes: { amount: '0', currency: 'USD' }
        },
        'im:contentType': { attributes: { term: 'Podcast', label: 'Podcast' } },
        rights: {
          label: 'Copyright © 2002-2023 PodcastOne.com. All rights reserved.'
        },
        title: { label: 'Behind the Song - The Drive | Hubbard Radio' },
        link: {
          attributes: {
            rel: 'alternate',
            type: 'text/html',
            href: 'https://podcasts.apple.com/us/podcast/behind-the-song/id1437006895?uo=2'
          }
        },
        id: {
          label:
            'https://podcasts.apple.com/us/podcast/behind-the-song/id1437006895?uo=2',
          attributes: { 'im:id': '1437006895' }
        },
        'im:artist': {
          label: 'The Drive | Hubbard Radio',
          attributes: {
            href: 'https://podcasts.apple.com/us/artist/the-drive/1526201798?uo=2'
          }
        },
        category: {
          attributes: {
            'im:id': '1524',
            term: 'Music History',
            scheme:
              'https://podcasts.apple.com/us/genre/podcasts-music-music-history/id1524?uo=2',
            label: 'Music History'
          }
        },
        'im:releaseDate': {
          label: '2023-02-08T12:41:00-07:00',
          attributes: { label: 'February 8, 2023' }
        }
      },
      {
        'im:name': { label: 'Markus Schulz presents Global DJ Broadcast' },
        'im:image': [
          {
            label:
              'https://is3-ssl.mzstatic.com/image/thumb/Podcasts/v4/6e/6c/a4/6e6ca4c5-192a-a545-4f90-2f104c93504e/mza_1446880203226712372.jpg/55x55bb.png',
            attributes: { height: '55' }
          },
          {
            label:
              'https://is5-ssl.mzstatic.com/image/thumb/Podcasts/v4/6e/6c/a4/6e6ca4c5-192a-a545-4f90-2f104c93504e/mza_1446880203226712372.jpg/60x60bb.png',
            attributes: { height: '60' }
          },
          {
            label:
              'https://is4-ssl.mzstatic.com/image/thumb/Podcasts/v4/6e/6c/a4/6e6ca4c5-192a-a545-4f90-2f104c93504e/mza_1446880203226712372.jpg/170x170bb.png',
            attributes: { height: '170' }
          }
        ],
        summary: {
          label:
            'Global DJ Broadcast is the weekly dance music radio show hosted by international DJ and producer Markus Schulz. Receiving multiple IDMA nominations since its inception, Markus’ unique fusion of trance, progressive and multiple additional genres has contributed to becoming one of the most popular radio shows on FM, satellite and online.'
        },
        'im:price': {
          label: 'Get',
          attributes: { amount: '0', currency: 'USD' }
        },
        'im:contentType': { attributes: { term: 'Podcast', label: 'Podcast' } },
        rights: {
          label: '© Copyright 2023. Global DJ Broadcast - All rights reserved'
        },
        title: {
          label: 'Markus Schulz presents Global DJ Broadcast - Markus Schulz'
        },
        link: {
          attributes: {
            rel: 'alternate',
            type: 'text/html',
            href: 'https://podcasts.apple.com/us/podcast/markus-schulz-presents-global-dj-broadcast/id460107093?uo=2'
          }
        },
        id: {
          label:
            'https://podcasts.apple.com/us/podcast/markus-schulz-presents-global-dj-broadcast/id460107093?uo=2',
          attributes: { 'im:id': '460107093' }
        },
        'im:artist': { label: 'Markus Schulz' },
        category: {
          attributes: {
            'im:id': '1310',
            term: 'Music',
            scheme:
              'https://podcasts.apple.com/us/genre/podcasts-music/id1310?uo=2',
            label: 'Music'
          }
        },
        'im:releaseDate': {
          label: '2023-02-23T10:54:00-07:00',
          attributes: { label: 'February 23, 2023' }
        }
      },
      {
        'im:name': { label: 'Strong Songs' },
        'im:price': {
          label: 'Get',
          attributes: { amount: '0', currency: 'USD' }
        },
        'im:image': [
          {
            label:
              'https://is5-ssl.mzstatic.com/image/thumb/Podcasts125/v4/49/fd/a0/49fda05c-e99d-c187-186c-4b0586ca74ee/mza_12353631562892339318.jpg/55x55bb.png',
            attributes: { height: '55' }
          },
          {
            label:
              'https://is4-ssl.mzstatic.com/image/thumb/Podcasts125/v4/49/fd/a0/49fda05c-e99d-c187-186c-4b0586ca74ee/mza_12353631562892339318.jpg/60x60bb.png',
            attributes: { height: '60' }
          },
          {
            label:
              'https://is4-ssl.mzstatic.com/image/thumb/Podcasts125/v4/49/fd/a0/49fda05c-e99d-c187-186c-4b0586ca74ee/mza_12353631562892339318.jpg/170x170bb.png',
            attributes: { height: '170' }
          }
        ],
        summary: {
          label:
            "Music: it's good. On each episode of Strong Songs, host Kirk Hamilton takes listeners inside a piece of music, breaking it down and figuring out what makes it work."
        },
        'im:artist': { label: 'Kirk Hamilton' },
        title: { label: 'Strong Songs - Kirk Hamilton' },
        link: {
          attributes: {
            rel: 'alternate',
            type: 'text/html',
            href: 'https://podcasts.apple.com/us/podcast/strong-songs/id1443417194?uo=2'
          }
        },
        id: {
          label:
            'https://podcasts.apple.com/us/podcast/strong-songs/id1443417194?uo=2',
          attributes: { 'im:id': '1443417194' }
        },
        'im:contentType': { attributes: { term: 'Podcast', label: 'Podcast' } },
        category: {
          attributes: {
            'im:id': '1523',
            term: 'Music Commentary',
            scheme:
              'https://podcasts.apple.com/us/genre/podcasts-music-music-commentary/id1523?uo=2',
            label: 'Music Commentary'
          }
        },
        'im:releaseDate': {
          label: '2023-02-23T21:00:00-07:00',
          attributes: { label: 'February 23, 2023' }
        }
      },
      {
        'im:name': { label: 'Music To Calm The Mind' },
        'im:image': [
          {
            label:
              'https://is2-ssl.mzstatic.com/image/thumb/Podcasts123/v4/7c/ce/7b/7cce7bed-4102-9e16-3bc1-65f51c879367/mza_15626080839771421807.jpg/55x55bb.png',
            attributes: { height: '55' }
          },
          {
            label:
              'https://is1-ssl.mzstatic.com/image/thumb/Podcasts123/v4/7c/ce/7b/7cce7bed-4102-9e16-3bc1-65f51c879367/mza_15626080839771421807.jpg/60x60bb.png',
            attributes: { height: '60' }
          },
          {
            label:
              'https://is3-ssl.mzstatic.com/image/thumb/Podcasts123/v4/7c/ce/7b/7cce7bed-4102-9e16-3bc1-65f51c879367/mza_15626080839771421807.jpg/170x170bb.png',
            attributes: { height: '170' }
          }
        ],
        summary: {
          label:
            'The Relaxation Channel is all about you the listener. We provide music to calm the mind and put you in a state of total relaxation. It has been scientifically proven just 10 minutes in a day of relaxing and listening to calm music can promote increased brain activity and allow the body to recharge. \n\nThe music selected has been carefully chosen to help you with relaxing, studying, sleeping, meditating, reduce stress, and anxiety. After listening you will feel refreshed and recharged. Your mind will be in a calm state and ready to continue in the world. Using our music to sleep will put you into a deep dream state and can help to reduce insomnia.\n\nFind a quiet comfortable place where you will not be disturbed,  even better if you have earbuds or headphones, sit back and relax.\n\nPlease help to support us check our website. www.relaxingchannel.com'
        },
        'im:price': {
          label: 'Get',
          attributes: { amount: '0', currency: 'USD' }
        },
        'im:contentType': { attributes: { term: 'Podcast', label: 'Podcast' } },
        rights: { label: '© Copyright 2020 The Relaxation Channel' },
        title: { label: 'Music To Calm The Mind - The Relaxation Channel' },
        link: {
          attributes: {
            rel: 'alternate',
            type: 'text/html',
            href: 'https://podcasts.apple.com/us/podcast/music-to-calm-the-mind/id1504829495?uo=2'
          }
        },
        id: {
          label:
            'https://podcasts.apple.com/us/podcast/music-to-calm-the-mind/id1504829495?uo=2',
          attributes: { 'im:id': '1504829495' }
        },
        'im:artist': { label: 'The Relaxation Channel' },
        category: {
          attributes: {
            'im:id': '1310',
            term: 'Music',
            scheme:
              'https://podcasts.apple.com/us/genre/podcasts-music/id1310?uo=2',
            label: 'Music'
          }
        },
        'im:releaseDate': {
          label: '2020-05-04T01:59:00-07:00',
          attributes: { label: 'May 4, 2020' }
        }
      },
      {
        'im:name': { label: 'Oliver Heldens presents Heldeep Radio' },
        'im:image': [
          {
            label:
              'https://is4-ssl.mzstatic.com/image/thumb/Podcasts124/v4/72/22/6f/72226f61-b883-2e6b-cfd6-37fb3dbff0ef/mza_492611831891214805.jpg/55x55bb.png',
            attributes: { height: '55' }
          },
          {
            label:
              'https://is3-ssl.mzstatic.com/image/thumb/Podcasts124/v4/72/22/6f/72226f61-b883-2e6b-cfd6-37fb3dbff0ef/mza_492611831891214805.jpg/60x60bb.png',
            attributes: { height: '60' }
          },
          {
            label:
              'https://is4-ssl.mzstatic.com/image/thumb/Podcasts124/v4/72/22/6f/72226f61-b883-2e6b-cfd6-37fb3dbff0ef/mza_492611831891214805.jpg/170x170bb.png',
            attributes: { height: '170' }
          }
        ],
        summary: {
          label:
            '#HeldeepRadio is the hottest radio show on the planet, brought to you by Dutch DJ and Electronic music producer, Oliver Heldens. Tune in every week with millions of global listeners to hear the very best in upfront house music, techno and everything in between, along with the latest releases from his Heldeep Records Label.'
        },
        'im:price': {
          label: 'Get',
          attributes: { amount: '0', currency: 'USD' }
        },
        'im:contentType': { attributes: { term: 'Podcast', label: 'Podcast' } },
        rights: { label: '© Oliver Heldens' },
        title: {
          label: 'Oliver Heldens presents Heldeep Radio - Oliver Heldens'
        },
        link: {
          attributes: {
            rel: 'alternate',
            type: 'text/html',
            href: 'https://podcasts.apple.com/us/podcast/oliver-heldens-presents-heldeep-radio/id1236253646?uo=2'
          }
        },
        id: {
          label:
            'https://podcasts.apple.com/us/podcast/oliver-heldens-presents-heldeep-radio/id1236253646?uo=2',
          attributes: { 'im:id': '1236253646' }
        },
        'im:artist': { label: 'Oliver Heldens' },
        category: {
          attributes: {
            'im:id': '1310',
            term: 'Music',
            scheme:
              'https://podcasts.apple.com/us/genre/podcasts-music/id1310?uo=2',
            label: 'Music'
          }
        },
        'im:releaseDate': {
          label: '2023-02-26T17:07:00-07:00',
          attributes: { label: 'February 26, 2023' }
        }
      },
      {
        'im:name': { label: 'Defected Radio' },
        'im:image': [
          {
            label:
              'https://is2-ssl.mzstatic.com/image/thumb/Podcasts115/v4/e5/77/bb/e577bb26-2fdc-1f88-75fa-07b27c182175/mza_18400960005851661343.jpg/55x55bb.png',
            attributes: { height: '55' }
          },
          {
            label:
              'https://is4-ssl.mzstatic.com/image/thumb/Podcasts115/v4/e5/77/bb/e577bb26-2fdc-1f88-75fa-07b27c182175/mza_18400960005851661343.jpg/60x60bb.png',
            attributes: { height: '60' }
          },
          {
            label:
              'https://is4-ssl.mzstatic.com/image/thumb/Podcasts115/v4/e5/77/bb/e577bb26-2fdc-1f88-75fa-07b27c182175/mza_18400960005851661343.jpg/170x170bb.png',
            attributes: { height: '170' }
          }
        ],
        summary: { label: 'Podcast from Defected Records' },
        'im:price': {
          label: 'Get',
          attributes: { amount: '0', currency: 'USD' }
        },
        'im:contentType': { attributes: { term: 'Podcast', label: 'Podcast' } },
        rights: { label: '© Defected' },
        title: { label: 'Defected Radio - Defected' },
        link: {
          attributes: {
            rel: 'alternate',
            type: 'text/html',
            href: 'https://podcasts.apple.com/us/podcast/defected-radio/id120107389?uo=2'
          }
        },
        id: {
          label:
            'https://podcasts.apple.com/us/podcast/defected-radio/id120107389?uo=2',
          attributes: { 'im:id': '120107389' }
        },
        'im:artist': {
          label: 'Defected',
          attributes: {
            href: 'https://podcasts.apple.com/us/artist/this-is-distorted/961280048?uo=2'
          }
        },
        category: {
          attributes: {
            'im:id': '1310',
            term: 'Music',
            scheme:
              'https://podcasts.apple.com/us/genre/podcasts-music/id1310?uo=2',
            label: 'Music'
          }
        },
        'im:releaseDate': {
          label: '2023-03-01T09:30:00-07:00',
          attributes: { label: 'March 1, 2023' }
        }
      },
      {
        'im:name': { label: 'Gully Tv Presents...The Dribble' },
        'im:image': [
          {
            label:
              'https://is1-ssl.mzstatic.com/image/thumb/Podcasts116/v4/72/e3/43/72e343fb-b026-3a1e-fe0f-537552c7ba6a/mza_4512508769769133238.png/55x55bb.png',
            attributes: { height: '55' }
          },
          {
            label:
              'https://is3-ssl.mzstatic.com/image/thumb/Podcasts116/v4/72/e3/43/72e343fb-b026-3a1e-fe0f-537552c7ba6a/mza_4512508769769133238.png/60x60bb.png',
            attributes: { height: '60' }
          },
          {
            label:
              'https://is1-ssl.mzstatic.com/image/thumb/Podcasts116/v4/72/e3/43/72e343fb-b026-3a1e-fe0f-537552c7ba6a/mza_4512508769769133238.png/170x170bb.png',
            attributes: { height: '170' }
          }
        ],
        summary: {
          label:
            'GULLYTV Presents "THE DRIBBLE", an audio adventure predicated on\n Hip Hop, Sports, & Fashion brought to you by \n THE MOST ELECTRIFYING GLOBAL MEDIA PERSONALITY ONLINE \nFresh uploads weekly\nSubscribe on YouTube - The Real Gully Tv\nVisit the website therealdribble.com'
        },
        'im:price': {
          label: 'Get',
          attributes: { amount: '0', currency: 'USD' }
        },
        'im:contentType': { attributes: { term: 'Podcast', label: 'Podcast' } },
        rights: { label: '© Copyright Jamil "GULLY TV" Lindsey' },
        title: {
          label: 'Gully Tv Presents...The Dribble - Jamil "GULLY TV" Lindsey'
        },
        link: {
          attributes: {
            rel: 'alternate',
            type: 'text/html',
            href: 'https://podcasts.apple.com/us/podcast/gully-tv-presents-the-dribble/id1595879026?uo=2'
          }
        },
        id: {
          label:
            'https://podcasts.apple.com/us/podcast/gully-tv-presents-the-dribble/id1595879026?uo=2',
          attributes: { 'im:id': '1595879026' }
        },
        'im:artist': { label: 'Jamil "GULLY TV" Lindsey' },
        category: {
          attributes: {
            'im:id': '1525',
            term: 'Music Interviews',
            scheme:
              'https://podcasts.apple.com/us/genre/podcasts-music-music-interviews/id1525?uo=2',
            label: 'Music Interviews'
          }
        },
        'im:releaseDate': {
          label: '2023-02-23T08:34:00-07:00',
          attributes: { label: 'February 23, 2023' }
        }
      },
      {
        'im:name': { label: 'Rockonteurs with Gary Kemp and Guy Pratt' },
        'im:image': [
          {
            label:
              'https://is3-ssl.mzstatic.com/image/thumb/Podcasts126/v4/78/11/7e/78117e5d-6f32-8703-4103-50a4e8b92896/mza_16223161993790108526.jpeg/55x55bb.png',
            attributes: { height: '55' }
          },
          {
            label:
              'https://is5-ssl.mzstatic.com/image/thumb/Podcasts126/v4/78/11/7e/78117e5d-6f32-8703-4103-50a4e8b92896/mza_16223161993790108526.jpeg/60x60bb.png',
            attributes: { height: '60' }
          },
          {
            label:
              'https://is3-ssl.mzstatic.com/image/thumb/Podcasts126/v4/78/11/7e/78117e5d-6f32-8703-4103-50a4e8b92896/mza_16223161993790108526.jpeg/170x170bb.png',
            attributes: { height: '170' }
          }
        ],
        summary: {
          label:
            'Rockonteurs is a podcast all about the real stories behind real music.\nPresented by Spandau Ballet’s Gary Kemp, who wrote and performed megahits like ‘Gold’ and ‘True’, and Guy Pratt, a bass player who shaped songs for the likes of Madonna and Pink Floyd, you’ll hear exclusive stories of life on the road, in the studio and what really happened behind the scenes from artists who wrote, performed and produced the some of the biggest classic rock and pop tracks of all time.\nGuests include Sir Bob Geldof, Roxy Music’s Phil Manzanera, super-producer Trevor Horn, Chris Difford of Squeeze and their bandmate from A Saucerful of Secrets, Pink Floyd’s Nick Mason\n\n Hosted on Acast. See acast.com/privacy for more information.'
        },
        'im:price': {
          label: 'Get',
          attributes: { amount: '0', currency: 'USD' }
        },
        'im:contentType': { attributes: { term: 'Podcast', label: 'Podcast' } },
        rights: { label: '© Gary Kemp and Guy Pratt' },
        title: {
          label:
            'Rockonteurs with Gary Kemp and Guy Pratt - Gary Kemp and Guy Pratt'
        },
        link: {
          attributes: {
            rel: 'alternate',
            type: 'text/html',
            href: 'https://podcasts.apple.com/us/podcast/rockonteurs-with-gary-kemp-and-guy-pratt/id1530701242?uo=2'
          }
        },
        id: {
          label:
            'https://podcasts.apple.com/us/podcast/rockonteurs-with-gary-kemp-and-guy-pratt/id1530701242?uo=2',
          attributes: { 'im:id': '1530701242' }
        },
        'im:artist': { label: 'Gary Kemp and Guy Pratt' },
        category: {
          attributes: {
            'im:id': '1310',
            term: 'Music',
            scheme:
              'https://podcasts.apple.com/us/genre/podcasts-music/id1310?uo=2',
            label: 'Music'
          }
        },
        'im:releaseDate': {
          label: '2023-03-04T23:44:00-07:00',
          attributes: { label: 'March 4, 2023' }
        }
      },
      {
        'im:name': { label: 'The Matador Revisionist History Podcast' },
        'im:image': [
          {
            label:
              'https://is2-ssl.mzstatic.com/image/thumb/Podcasts122/v4/fe/2b/b9/fe2bb9e0-254d-bc63-1df4-733776d3bb58/mza_11279846781224860113.jpg/55x55bb.png',
            attributes: { height: '55' }
          },
          {
            label:
              'https://is1-ssl.mzstatic.com/image/thumb/Podcasts122/v4/fe/2b/b9/fe2bb9e0-254d-bc63-1df4-733776d3bb58/mza_11279846781224860113.jpg/60x60bb.png',
            attributes: { height: '60' }
          },
          {
            label:
              'https://is1-ssl.mzstatic.com/image/thumb/Podcasts122/v4/fe/2b/b9/fe2bb9e0-254d-bc63-1df4-733776d3bb58/mza_11279846781224860113.jpg/170x170bb.png',
            attributes: { height: '170' }
          }
        ],
        summary: {
          label:
            'For more than 3 decades, Matador Records has been nestled soemwhere in the top half dozen independent labels. Some years were better than others - everyone\'s got an opinion, especially the recording artists. Hear their stories on "Matador Revisionist History" and find out what really happened (sort of).'
        },
        'im:price': {
          label: 'Get',
          attributes: { amount: '0', currency: 'USD' }
        },
        'im:contentType': { attributes: { term: 'Podcast', label: 'Podcast' } },
        rights: { label: '© (C) Matador Records' },
        title: {
          label:
            'The Matador Revisionist History Podcast - The Matador Revisionist History Podcast'
        },
        link: {
          attributes: {
            rel: 'alternate',
            type: 'text/html',
            href: 'https://podcasts.apple.com/us/podcast/the-matador-revisionist-history-podcast/id1618800848?uo=2'
          }
        },
        id: {
          label:
            'https://podcasts.apple.com/us/podcast/the-matador-revisionist-history-podcast/id1618800848?uo=2',
          attributes: { 'im:id': '1618800848' }
        },
        'im:artist': { label: 'The Matador Revisionist History Podcast' },
        category: {
          attributes: {
            'im:id': '1525',
            term: 'Music Interviews',
            scheme:
              'https://podcasts.apple.com/us/genre/podcasts-music-music-interviews/id1525?uo=2',
            label: 'Music Interviews'
          }
        },
        'im:releaseDate': {
          label: '2022-07-12T07:00:00-07:00',
          attributes: { label: 'July 12, 2022' }
        }
      },
      {
        'im:name': { label: "GOOD OL' GRATEFUL DEADCAST" },
        'im:image': [
          {
            label:
              'https://is5-ssl.mzstatic.com/image/thumb/Podcasts112/v4/9b/3b/3a/9b3b3a0c-0510-00f5-2131-480672029591/mza_10411425340112524306.jpeg/55x55bb.png',
            attributes: { height: '55' }
          },
          {
            label:
              'https://is2-ssl.mzstatic.com/image/thumb/Podcasts112/v4/9b/3b/3a/9b3b3a0c-0510-00f5-2131-480672029591/mza_10411425340112524306.jpeg/60x60bb.png',
            attributes: { height: '60' }
          },
          {
            label:
              'https://is3-ssl.mzstatic.com/image/thumb/Podcasts112/v4/9b/3b/3a/9b3b3a0c-0510-00f5-2131-480672029591/mza_10411425340112524306.jpeg/170x170bb.png',
            attributes: { height: '170' }
          }
        ],
        summary: {
          label:
            '“The Good Ol’ Grateful Deadcast,” the official Grateful Dead podcast, is a series devoted to exploring the music and mythology behind one of the most enduring, progressive, and influential bands in the history of recorded music. The podcast’s tagline is “For The Committed And The Curious,” as episodes will invite new fans to explore the band’s enormous mythology in digestible chunks and enlighten life-long Dead Heads about corners of the band’s history they never knew existed. No topic will be off limits on “The Good Ol’ Grateful Deadcast” as hosts Rich Mahan and Jesse Jarnow explore the band’s outrageous history, innovations, and impact from 1965 to today.'
        },
        'im:price': {
          label: 'Get',
          attributes: { amount: '0', currency: 'USD' }
        },
        'im:contentType': { attributes: { term: 'Podcast', label: 'Podcast' } },
        rights: { label: '© dead.net' },
        title: { label: "GOOD OL' GRATEFUL DEADCAST - Grateful Dead" },
        link: {
          attributes: {
            rel: 'alternate',
            type: 'text/html',
            href: 'https://podcasts.apple.com/us/podcast/good-ol-grateful-deadcast/id1522914723?uo=2'
          }
        },
        id: {
          label:
            'https://podcasts.apple.com/us/podcast/good-ol-grateful-deadcast/id1522914723?uo=2',
          attributes: { 'im:id': '1522914723' }
        },
        'im:artist': { label: 'Grateful Dead' },
        category: {
          attributes: {
            'im:id': '1524',
            term: 'Music History',
            scheme:
              'https://podcasts.apple.com/us/genre/podcasts-music-music-history/id1524?uo=2',
            label: 'Music History'
          }
        },
        'im:releaseDate': {
          label: '2022-11-17T00:00:00-07:00',
          attributes: { label: 'November 17, 2022' }
        }
      },
      {
        'im:name': { label: 'Rap Radar' },
        'im:image': [
          {
            label:
              'https://is2-ssl.mzstatic.com/image/thumb/Podcasts122/v4/b7/18/1b/b7181b75-4ea1-b055-2ab7-1f8db02b8944/mza_4736755138608441504.jpg/55x55bb.png',
            attributes: { height: '55' }
          },
          {
            label:
              'https://is1-ssl.mzstatic.com/image/thumb/Podcasts122/v4/b7/18/1b/b7181b75-4ea1-b055-2ab7-1f8db02b8944/mza_4736755138608441504.jpg/60x60bb.png',
            attributes: { height: '60' }
          },
          {
            label:
              'https://is5-ssl.mzstatic.com/image/thumb/Podcasts122/v4/b7/18/1b/b7181b75-4ea1-b055-2ab7-1f8db02b8944/mza_4736755138608441504.jpg/170x170bb.png',
            attributes: { height: '170' }
          }
        ],
        summary: {
          label:
            'Rap Radar is the home of hip-hop’s most revealing interviews. Each week, famed journalists Elliott Wilson and Brian ‘B.Dot’ Miller invite A-listers from across the hip-hop industry to sit down for the definitive conversation around life experiences, music and culture.'
        },
        'im:price': {
          label: 'Get',
          attributes: { amount: '0', currency: 'USD' }
        },
        'im:contentType': { attributes: { term: 'Podcast', label: 'Podcast' } },
        rights: { label: '© 2023 Interval Presents' },
        title: { label: 'Rap Radar - Interval Presents' },
        link: {
          attributes: {
            rel: 'alternate',
            type: 'text/html',
            href: 'https://podcasts.apple.com/us/podcast/rap-radar/id1635777933?uo=2'
          }
        },
        id: {
          label:
            'https://podcasts.apple.com/us/podcast/rap-radar/id1635777933?uo=2',
          attributes: { 'im:id': '1635777933' }
        },
        'im:artist': { label: 'Interval Presents' },
        category: {
          attributes: {
            'im:id': '1310',
            term: 'Music',
            scheme:
              'https://podcasts.apple.com/us/genre/podcasts-music/id1310?uo=2',
            label: 'Music'
          }
        },
        'im:releaseDate': {
          label: '2023-03-02T03:00:00-07:00',
          attributes: { label: 'March 2, 2023' }
        }
      },
      {
        'im:name': { label: 'Zach Sang Show' },
        'im:image': [
          {
            label:
              'https://is5-ssl.mzstatic.com/image/thumb/Podcasts122/v4/c4/fd/ef/c4fdefb3-4221-0e7e-a11c-29f68f246f04/mza_11755454741918453328.jpeg/55x55bb.png',
            attributes: { height: '55' }
          },
          {
            label:
              'https://is4-ssl.mzstatic.com/image/thumb/Podcasts122/v4/c4/fd/ef/c4fdefb3-4221-0e7e-a11c-29f68f246f04/mza_11755454741918453328.jpeg/60x60bb.png',
            attributes: { height: '60' }
          },
          {
            label:
              'https://is5-ssl.mzstatic.com/image/thumb/Podcasts122/v4/c4/fd/ef/c4fdefb3-4221-0e7e-a11c-29f68f246f04/mza_11755454741918453328.jpeg/170x170bb.png',
            attributes: { height: '170' }
          }
        ],
        summary: {
          label:
            'Zach Sang is a multimedia superstar with a new generation of followers. He is a radio prodigy, former Nickelodeon personality, social media addict, pop culture junkie… and everyone’s best friend.'
        },
        'im:price': {
          label: 'Get',
          attributes: { amount: '0', currency: 'USD' }
        },
        'im:contentType': { attributes: { term: 'Podcast', label: 'Podcast' } },
        rights: { label: '© 2022 OBB Sound, LLC' },
        title: { label: 'Zach Sang Show - OBB Sound' },
        link: {
          attributes: {
            rel: 'alternate',
            type: 'text/html',
            href: 'https://podcasts.apple.com/us/podcast/zach-sang-show/id1273079673?uo=2'
          }
        },
        id: {
          label:
            'https://podcasts.apple.com/us/podcast/zach-sang-show/id1273079673?uo=2',
          attributes: { 'im:id': '1273079673' }
        },
        'im:artist': {
          label: 'OBB Sound',
          attributes: {
            href: 'https://podcasts.apple.com/us/artist/westwood-one/1383049848?uo=2'
          }
        },
        category: {
          attributes: {
            'im:id': '1525',
            term: 'Music Interviews',
            scheme:
              'https://podcasts.apple.com/us/genre/podcasts-music-music-interviews/id1525?uo=2',
            label: 'Music Interviews'
          }
        },
        'im:releaseDate': {
          label: '2023-03-03T01:00:00-07:00',
          attributes: { label: 'March 3, 2023' }
        }
      },
      {
        'im:name': { label: 'Song of the Day' },
        'im:image': [
          {
            label:
              'https://is1-ssl.mzstatic.com/image/thumb/Podcasts113/v4/05/52/23/05522392-2b0e-227d-d8f6-a17f969b6370/mza_2282485350288370656.jpg/55x55bb.png',
            attributes: { height: '55' }
          },
          {
            label:
              'https://is5-ssl.mzstatic.com/image/thumb/Podcasts113/v4/05/52/23/05522392-2b0e-227d-d8f6-a17f969b6370/mza_2282485350288370656.jpg/60x60bb.png',
            attributes: { height: '60' }
          },
          {
            label:
              'https://is4-ssl.mzstatic.com/image/thumb/Podcasts113/v4/05/52/23/05522392-2b0e-227d-d8f6-a17f969b6370/mza_2282485350288370656.jpg/170x170bb.png',
            attributes: { height: '170' }
          }
        ],
        summary: {
          label:
            'KEXP’s Song of the Day podcast features stand-out tracks from independent and emerging talent alongside the best new music from more established artists. Curated by KEXP DJs with listeners’ adventurous taste in mind, Song of the Day is delivered daily, Monday through Friday. Finding new music can be hard. Let KEXP help!'
        },
        'im:price': {
          label: 'Get',
          attributes: { amount: '0', currency: 'USD' }
        },
        'im:contentType': { attributes: { term: 'Podcast', label: 'Podcast' } },
        rights: { label: '© 2023 KEXP' },
        title: { label: 'Song of the Day - KEXP' },
        link: {
          attributes: {
            rel: 'alternate',
            type: 'text/html',
            href: 'https://podcasts.apple.com/us/podcast/song-of-the-day/id121393815?uo=2'
          }
        },
        id: {
          label:
            'https://podcasts.apple.com/us/podcast/song-of-the-day/id121393815?uo=2',
          attributes: { 'im:id': '121393815' }
        },
        'im:artist': {
          label: 'KEXP',
          attributes: {
            href: 'https://podcasts.apple.com/us/artist/kexp/1255299840?uo=2'
          }
        },
        category: {
          attributes: {
            'im:id': '1310',
            term: 'Music',
            scheme:
              'https://podcasts.apple.com/us/genre/podcasts-music/id1310?uo=2',
            label: 'Music'
          }
        },
        'im:releaseDate': {
          label: '2023-03-08T00:00:00-07:00',
          attributes: { label: 'March 8, 2023' }
        }
      },
      {
        'im:name': { label: 'On Air With Ryan Seacrest' },
        'im:image': [
          {
            label:
              'https://is2-ssl.mzstatic.com/image/thumb/Podcasts112/v4/12/d0/6a/12d06a60-3de4-022a-0069-9c77beb21251/mza_14833436082684958648.jpg/55x55bb.png',
            attributes: { height: '55' }
          },
          {
            label:
              'https://is4-ssl.mzstatic.com/image/thumb/Podcasts112/v4/12/d0/6a/12d06a60-3de4-022a-0069-9c77beb21251/mza_14833436082684958648.jpg/60x60bb.png',
            attributes: { height: '60' }
          },
          {
            label:
              'https://is1-ssl.mzstatic.com/image/thumb/Podcasts112/v4/12/d0/6a/12d06a60-3de4-022a-0069-9c77beb21251/mza_14833436082684958648.jpg/170x170bb.png',
            attributes: { height: '170' }
          }
        ],
        summary: {
          label:
            'Did you miss today’s Ryan’s Roses? Or Second Date Update? Or celebrity interview? Listen to the entire show here every day with Ryan Seacrest, Sisanie, Tanya Rad and Patty Rodriguez.'
        },
        'im:price': {
          label: 'Get',
          attributes: { amount: '0', currency: 'USD' }
        },
        'im:contentType': { attributes: { term: 'Podcast', label: 'Podcast' } },
        rights: { label: '© 2023 iHeartPodcasts' },
        title: { label: 'On Air With Ryan Seacrest - iHeartPodcasts' },
        link: {
          attributes: {
            rel: 'alternate',
            type: 'text/html',
            href: 'https://podcasts.apple.com/us/podcast/on-air-with-ryan-seacrest/id1566134877?uo=2'
          }
        },
        id: {
          label:
            'https://podcasts.apple.com/us/podcast/on-air-with-ryan-seacrest/id1566134877?uo=2',
          attributes: { 'im:id': '1566134877' }
        },
        'im:artist': { label: 'iHeartPodcasts' },
        category: {
          attributes: {
            'im:id': '1525',
            term: 'Music Interviews',
            scheme:
              'https://podcasts.apple.com/us/genre/podcasts-music-music-interviews/id1525?uo=2',
            label: 'Music Interviews'
          }
        },
        'im:releaseDate': {
          label: '2023-03-07T13:00:00-07:00',
          attributes: { label: 'March 7, 2023' }
        }
      },
      {
        'im:name': { label: 'The Vinyl Guide' },
        'im:price': {
          label: 'Get',
          attributes: { amount: '0', currency: 'USD' }
        },
        'im:image': [
          {
            label:
              'https://is3-ssl.mzstatic.com/image/thumb/Podcasts125/v4/55/ef/61/55ef61e9-5f94-17be-db30-080187cd72f5/mza_1365384137233270926.jpg/55x55bb.png',
            attributes: { height: '55' }
          },
          {
            label:
              'https://is5-ssl.mzstatic.com/image/thumb/Podcasts125/v4/55/ef/61/55ef61e9-5f94-17be-db30-080187cd72f5/mza_1365384137233270926.jpg/60x60bb.png',
            attributes: { height: '60' }
          },
          {
            label:
              'https://is3-ssl.mzstatic.com/image/thumb/Podcasts125/v4/55/ef/61/55ef61e9-5f94-17be-db30-080187cd72f5/mza_1365384137233270926.jpg/170x170bb.png',
            attributes: { height: '170' }
          }
        ],
        summary: {
          label:
            'Nate is a record collector, music lover and vinyl maniac. Join him on his journey to discuss, share and review all things related to vinyl records. We feature stories about and interviews with musicians, artists and people of knowledge in the area of vinyl records. Additionally we share information on desirable pressings of records, how to tell a $5 pressing from a $500 pressing and care and maintenance for your cratedigging hobby.  Subscribe and share with your record-nerd friends. Cheers!'
        },
        'im:artist': { label: 'The Vinyl Guide' },
        title: { label: 'The Vinyl Guide - The Vinyl Guide' },
        link: {
          attributes: {
            rel: 'alternate',
            type: 'text/html',
            href: 'https://podcasts.apple.com/us/podcast/the-vinyl-guide/id1048766030?uo=2'
          }
        },
        id: {
          label:
            'https://podcasts.apple.com/us/podcast/the-vinyl-guide/id1048766030?uo=2',
          attributes: { 'im:id': '1048766030' }
        },
        'im:contentType': { attributes: { term: 'Podcast', label: 'Podcast' } },
        category: {
          attributes: {
            'im:id': '1525',
            term: 'Music Interviews',
            scheme:
              'https://podcasts.apple.com/us/genre/podcasts-music-music-interviews/id1525?uo=2',
            label: 'Music Interviews'
          }
        },
        'im:releaseDate': {
          label: '2023-02-27T00:11:00-07:00',
          attributes: { label: 'February 27, 2023' }
        }
      },
      {
        'im:name': { label: 'The Mallory Bros Podcast' },
        'im:image': [
          {
            label:
              'https://is4-ssl.mzstatic.com/image/thumb/Podcasts124/v4/57/2a/52/572a52e3-4af7-9efe-6794-8ad7531e126d/mza_1679659830600619828.png/55x55bb.png',
            attributes: { height: '55' }
          },
          {
            label:
              'https://is3-ssl.mzstatic.com/image/thumb/Podcasts124/v4/57/2a/52/572a52e3-4af7-9efe-6794-8ad7531e126d/mza_1679659830600619828.png/60x60bb.png',
            attributes: { height: '60' }
          },
          {
            label:
              'https://is5-ssl.mzstatic.com/image/thumb/Podcasts124/v4/57/2a/52/572a52e3-4af7-9efe-6794-8ad7531e126d/mza_1679659830600619828.png/170x170bb.png',
            attributes: { height: '170' }
          }
        ],
        summary: {
          label:
            'For a long time subscribers of the MalloryBros. YouTube channel, requested that they start a podcast. After years, they finally deliver. New Episode Every Friday!'
        },
        'im:price': {
          label: 'Get',
          attributes: { amount: '0', currency: 'USD' }
        },
        'im:contentType': { attributes: { term: 'Podcast', label: 'Podcast' } },
        rights: { label: '© Copyright 2020 All rights reserved.' },
        title: { label: 'The Mallory Bros Podcast - MalloryBros.' },
        link: {
          attributes: {
            rel: 'alternate',
            type: 'text/html',
            href: 'https://podcasts.apple.com/us/podcast/the-mallory-bros-podcast/id1520856346?uo=2'
          }
        },
        id: {
          label:
            'https://podcasts.apple.com/us/podcast/the-mallory-bros-podcast/id1520856346?uo=2',
          attributes: { 'im:id': '1520856346' }
        },
        'im:artist': { label: 'MalloryBros.' },
        category: {
          attributes: {
            'im:id': '1310',
            term: 'Music',
            scheme:
              'https://podcasts.apple.com/us/genre/podcasts-music/id1310?uo=2',
            label: 'Music'
          }
        },
        'im:releaseDate': {
          label: '2023-02-23T22:00:00-07:00',
          attributes: { label: 'February 23, 2023' }
        }
      },
      {
        'im:name': { label: 'Something About the Beatles' },
        'im:image': [
          {
            label:
              'https://is1-ssl.mzstatic.com/image/thumb/Podcasts115/v4/8a/51/21/8a5121ea-6b45-9964-240b-65aa05de078b/mza_13082723830658124341.jpg/55x55bb.png',
            attributes: { height: '55' }
          },
          {
            label:
              'https://is3-ssl.mzstatic.com/image/thumb/Podcasts115/v4/8a/51/21/8a5121ea-6b45-9964-240b-65aa05de078b/mza_13082723830658124341.jpg/60x60bb.png',
            attributes: { height: '60' }
          },
          {
            label:
              'https://is4-ssl.mzstatic.com/image/thumb/Podcasts115/v4/8a/51/21/8a5121ea-6b45-9964-240b-65aa05de078b/mza_13082723830658124341.jpg/170x170bb.png',
            attributes: { height: '170' }
          }
        ],
        summary: {
          label:
            "Hosted by award-winning author Robert Rodriguez, Something About The Beatles is an intelligent but entertaining examination of The Beatles' music and career. Smart, funny and surprising - just like the Fab Four."
        },
        'im:price': {
          label: 'Get',
          attributes: { amount: '0', currency: 'USD' }
        },
        'im:contentType': { attributes: { term: 'Podcast', label: 'Podcast' } },
        rights: { label: '© Parading Press' },
        title: { label: 'Something About the Beatles - Parading Press' },
        link: {
          attributes: {
            rel: 'alternate',
            type: 'text/html',
            href: 'https://podcasts.apple.com/us/podcast/something-about-the-beatles/id1483392342?uo=2'
          }
        },
        id: {
          label:
            'https://podcasts.apple.com/us/podcast/something-about-the-beatles/id1483392342?uo=2',
          attributes: { 'im:id': '1483392342' }
        },
        'im:artist': { label: 'Parading Press' },
        category: {
          attributes: {
            'im:id': '1310',
            term: 'Music',
            scheme:
              'https://podcasts.apple.com/us/genre/podcasts-music/id1310?uo=2',
            label: 'Music'
          }
        },
        'im:releaseDate': {
          label: '2023-03-04T22:02:00-07:00',
          attributes: { label: 'March 4, 2023' }
        }
      },
      {
        'im:name': { label: 'The Eddie Trunk Podcast' },
        'im:image': [
          {
            label:
              'https://is1-ssl.mzstatic.com/image/thumb/Podcasts115/v4/04/24/3d/04243df2-1733-8451-fb33-e44eb3c7f6b4/mza_15545195643785501860.jpg/55x55bb.png',
            attributes: { height: '55' }
          },
          {
            label:
              'https://is5-ssl.mzstatic.com/image/thumb/Podcasts115/v4/04/24/3d/04243df2-1733-8451-fb33-e44eb3c7f6b4/mza_15545195643785501860.jpg/60x60bb.png',
            attributes: { height: '60' }
          },
          {
            label:
              'https://is2-ssl.mzstatic.com/image/thumb/Podcasts115/v4/04/24/3d/04243df2-1733-8451-fb33-e44eb3c7f6b4/mza_15545195643785501860.jpg/170x170bb.png',
            attributes: { height: '170' }
          }
        ],
        summary: {
          label:
            'Eddie Trunk, the most well-known name in hard rock and metal music, brings his insight, commentary, reviews, discussion, and in-depth interviews to the podcast world!  Join Eddie and his famous friends in rock and entertainment every week for a rollicking good time.'
        },
        'im:price': {
          label: 'Get',
          attributes: { amount: '0', currency: 'USD' }
        },
        'im:contentType': { attributes: { term: 'Podcast', label: 'Podcast' } },
        rights: { label: '© Copyright 2021 SiriusXM' },
        title: { label: 'The Eddie Trunk Podcast - SiriusXM' },
        link: {
          attributes: {
            rel: 'alternate',
            type: 'text/html',
            href: 'https://podcasts.apple.com/us/podcast/the-eddie-trunk-podcast/id897720614?uo=2'
          }
        },
        id: {
          label:
            'https://podcasts.apple.com/us/podcast/the-eddie-trunk-podcast/id897720614?uo=2',
          attributes: { 'im:id': '897720614' }
        },
        'im:artist': {
          label: 'SiriusXM',
          attributes: {
            href: 'https://podcasts.apple.com/us/artist/podcastone/600711892?uo=2'
          }
        },
        category: {
          attributes: {
            'im:id': '1310',
            term: 'Music',
            scheme:
              'https://podcasts.apple.com/us/genre/podcasts-music/id1310?uo=2',
            label: 'Music'
          }
        },
        'im:releaseDate': {
          label: '2023-02-22T21:00:00-07:00',
          attributes: { label: 'February 22, 2023' }
        }
      },
      {
        'im:name': { label: 'Know Your Gear Podcast' },
        'im:image': [
          {
            label:
              'https://is3-ssl.mzstatic.com/image/thumb/Podcasts115/v4/38/6b/e0/386be0eb-e019-2158-cfb4-390e0c91415c/mza_10628021438574071571.jpg/55x55bb.png',
            attributes: { height: '55' }
          },
          {
            label:
              'https://is5-ssl.mzstatic.com/image/thumb/Podcasts115/v4/38/6b/e0/386be0eb-e019-2158-cfb4-390e0c91415c/mza_10628021438574071571.jpg/60x60bb.png',
            attributes: { height: '60' }
          },
          {
            label:
              'https://is1-ssl.mzstatic.com/image/thumb/Podcasts115/v4/38/6b/e0/386be0eb-e019-2158-cfb4-390e0c91415c/mza_10628021438574071571.jpg/170x170bb.png',
            attributes: { height: '170' }
          }
        ],
        summary: {
          label:
            'The Know Your Gear Podcast with Phillip McKnight is a weekly show where he answers   about 30 to 40 guitar related questions while keeping it fun and informative.'
        },
        'im:price': {
          label: 'Get',
          attributes: { amount: '0', currency: 'USD' }
        },
        'im:contentType': { attributes: { term: 'Podcast', label: 'Podcast' } },
        rights: { label: '© 2023 Know Your Gear Podcast' },
        title: { label: 'Know Your Gear Podcast - Phillip Mcknight' },
        link: {
          attributes: {
            rel: 'alternate',
            type: 'text/html',
            href: 'https://podcasts.apple.com/us/podcast/know-your-gear-podcast/id1252877095?uo=2'
          }
        },
        id: {
          label:
            'https://podcasts.apple.com/us/podcast/know-your-gear-podcast/id1252877095?uo=2',
          attributes: { 'im:id': '1252877095' }
        },
        'im:artist': { label: 'Phillip Mcknight' },
        category: {
          attributes: {
            'im:id': '1524',
            term: 'Music History',
            scheme:
              'https://podcasts.apple.com/us/genre/podcasts-music-music-history/id1524?uo=2',
            label: 'Music History'
          }
        },
        'im:releaseDate': {
          label: '2023-03-03T08:00:00-07:00',
          attributes: { label: 'March 3, 2023' }
        }
      },
      {
        'im:name': { label: 'Wong Notes' },
        'im:image': [
          {
            label:
              'https://is2-ssl.mzstatic.com/image/thumb/Podcasts114/v4/d5/fa/79/d5fa79d6-d7e1-e454-43b8-e651432d0397/mza_12366899039235468319.jpg/55x55bb.png',
            attributes: { height: '55' }
          },
          {
            label:
              'https://is4-ssl.mzstatic.com/image/thumb/Podcasts114/v4/d5/fa/79/d5fa79d6-d7e1-e454-43b8-e651432d0397/mza_12366899039235468319.jpg/60x60bb.png',
            attributes: { height: '60' }
          },
          {
            label:
              'https://is2-ssl.mzstatic.com/image/thumb/Podcasts114/v4/d5/fa/79/d5fa79d6-d7e1-e454-43b8-e651432d0397/mza_12366899039235468319.jpg/170x170bb.png',
            attributes: { height: '170' }
          }
        ],
        summary: {
          label:
            "Hi, my name is Cory Wong. This is my podcast. I'm going to talk to your favorite artists as they discuss their personal tricks of the trade, never-before-heard stories, and the proper response when Sinatra wants to peep your master tapes."
        },
        'im:price': {
          label: 'Get',
          attributes: { amount: '0', currency: 'USD' }
        },
        'im:contentType': { attributes: { term: 'Podcast', label: 'Podcast' } },
        rights: {
          label: '© Copyright 2022 Gearhead Communications / Cory Wong'
        },
        title: { label: 'Wong Notes - Premier Guitar' },
        link: {
          attributes: {
            rel: 'alternate',
            type: 'text/html',
            href: 'https://podcasts.apple.com/us/podcast/wong-notes/id1513405224?uo=2'
          }
        },
        id: {
          label:
            'https://podcasts.apple.com/us/podcast/wong-notes/id1513405224?uo=2',
          attributes: { 'im:id': '1513405224' }
        },
        'im:artist': { label: 'Premier Guitar' },
        category: {
          attributes: {
            'im:id': '1525',
            term: 'Music Interviews',
            scheme:
              'https://podcasts.apple.com/us/genre/podcasts-music-music-interviews/id1525?uo=2',
            label: 'Music Interviews'
          }
        },
        'im:releaseDate': {
          label: '2023-01-11T22:00:00-07:00',
          attributes: { label: 'January 11, 2023' }
        }
      },
      {
        'im:name': { label: 'Calm Rain Sounds' },
        'im:image': [
          {
            label:
              'https://is2-ssl.mzstatic.com/image/thumb/Podcasts123/v4/81/61/a6/8161a67d-3788-f542-9189-2bc9f3fa5af4/mza_13647480827358819102.jpg/55x55bb.png',
            attributes: { height: '55' }
          },
          {
            label:
              'https://is4-ssl.mzstatic.com/image/thumb/Podcasts123/v4/81/61/a6/8161a67d-3788-f542-9189-2bc9f3fa5af4/mza_13647480827358819102.jpg/60x60bb.png',
            attributes: { height: '60' }
          },
          {
            label:
              'https://is1-ssl.mzstatic.com/image/thumb/Podcasts123/v4/81/61/a6/8161a67d-3788-f542-9189-2bc9f3fa5af4/mza_13647480827358819102.jpg/170x170bb.png',
            attributes: { height: '170' }
          }
        ],
        summary: { label: '1 hour of soothing rain sounds' },
        'im:price': {
          label: 'Get',
          attributes: { amount: '0', currency: 'USD' }
        },
        'im:contentType': { attributes: { term: 'Podcast', label: 'Podcast' } },
        rights: { label: '© melvin urumath' },
        title: { label: 'Calm Rain Sounds - melvin urumath' },
        link: {
          attributes: {
            rel: 'alternate',
            type: 'text/html',
            href: 'https://podcasts.apple.com/us/podcast/calm-rain-sounds/id1512740484?uo=2'
          }
        },
        id: {
          label:
            'https://podcasts.apple.com/us/podcast/calm-rain-sounds/id1512740484?uo=2',
          attributes: { 'im:id': '1512740484' }
        },
        'im:artist': { label: 'melvin urumath' },
        category: {
          attributes: {
            'im:id': '1310',
            term: 'Music',
            scheme:
              'https://podcasts.apple.com/us/genre/podcasts-music/id1310?uo=2',
            label: 'Music'
          }
        },
        'im:releaseDate': {
          label: '2020-04-16T15:20:00-07:00',
          attributes: { label: 'April 16, 2020' }
        }
      },
      {
        'im:name': { label: 'One Life One Chance with Toby Morse' },
        'im:price': {
          label: 'Get',
          attributes: { amount: '0', currency: 'USD' }
        },
        'im:image': [
          {
            label:
              'https://is5-ssl.mzstatic.com/image/thumb/Podcasts123/v4/a0/1a/af/a01aaf2e-08ad-8dd3-371b-88f59c6682b9/mza_2186108355281145764.jpg/55x55bb.png',
            attributes: { height: '55' }
          },
          {
            label:
              'https://is4-ssl.mzstatic.com/image/thumb/Podcasts123/v4/a0/1a/af/a01aaf2e-08ad-8dd3-371b-88f59c6682b9/mza_2186108355281145764.jpg/60x60bb.png',
            attributes: { height: '60' }
          },
          {
            label:
              'https://is1-ssl.mzstatic.com/image/thumb/Podcasts123/v4/a0/1a/af/a01aaf2e-08ad-8dd3-371b-88f59c6682b9/mza_2186108355281145764.jpg/170x170bb.png',
            attributes: { height: '170' }
          }
        ],
        summary: {
          label:
            'Toby Morse is the host of the One Life One Chance podcast and lead singer of the band H2O for 26 years. The show, as well as his 501C3 non-profit organization, is named after one of their most impactful songs off of their 1999 album F.T.T.W. Inside these episodes you\'ll hear him have real, authentic and non-scripted conversations with friends and heroes who have had a major impact on his life, where many guests have said it was "very therapeutic". Follow him on Instagram @onelifeonechancepodcast and @tobymorse for pics, video and an inside look at his interviews, and for more information about Toby\'s lifestyle and his non-profit visit onelifeonechance.com.'
        },
        'im:artist': { label: 'One Life One Chance with Toby Morse' },
        title: {
          label:
            'One Life One Chance with Toby Morse - One Life One Chance with Toby Morse'
        },
        link: {
          attributes: {
            rel: 'alternate',
            type: 'text/html',
            href: 'https://podcasts.apple.com/us/podcast/one-life-one-chance-with-toby-morse/id1449669906?uo=2'
          }
        },
        id: {
          label:
            'https://podcasts.apple.com/us/podcast/one-life-one-chance-with-toby-morse/id1449669906?uo=2',
          attributes: { 'im:id': '1449669906' }
        },
        'im:contentType': { attributes: { term: 'Podcast', label: 'Podcast' } },
        category: {
          attributes: {
            'im:id': '1310',
            term: 'Music',
            scheme:
              'https://podcasts.apple.com/us/genre/podcasts-music/id1310?uo=2',
            label: 'Music'
          }
        },
        'im:releaseDate': {
          label: '2023-02-27T01:00:00-07:00',
          attributes: { label: 'February 27, 2023' }
        }
      },
      {
        'im:name': { label: '50 Years of Hip-Hop' },
        'im:price': {
          label: 'Get',
          attributes: { amount: '0', currency: 'USD' }
        },
        'im:image': [
          {
            label:
              'https://is5-ssl.mzstatic.com/image/thumb/Podcasts123/v4/f8/e2/63/f8e263a6-e723-64d8-6891-b40f7424a852/mza_4487244322136666269.jpg/55x55bb.png',
            attributes: { height: '55' }
          },
          {
            label:
              'https://is4-ssl.mzstatic.com/image/thumb/Podcasts123/v4/f8/e2/63/f8e263a6-e723-64d8-6891-b40f7424a852/mza_4487244322136666269.jpg/60x60bb.png',
            attributes: { height: '60' }
          },
          {
            label:
              'https://is5-ssl.mzstatic.com/image/thumb/Podcasts123/v4/f8/e2/63/f8e263a6-e723-64d8-6891-b40f7424a852/mza_4487244322136666269.jpg/170x170bb.png',
            attributes: { height: '170' }
          }
        ],
        summary: {
          label:
            'A party in the Bronx on August 11th, 1973 is widely considered to be the birthplace of hip-hop. The art form has since touched every corner of our world and evolved into one of the most significant cultural forces today. 50 Years of Hip-Hop, hosted by KEXP’s Larry Mizell Jr, celebrates the anniversary by highlighting a different year of its history each week. Jumping around the timeline from 1973 to today, expect personal reflections, iconic tracks and albums, and conversations around the genesis of the culture. Episodes drop weekly starting February 1, 2023.'
        },
        'im:artist': { label: 'KEXP' },
        title: { label: '50 Years of Hip-Hop - KEXP' },
        link: {
          attributes: {
            rel: 'alternate',
            type: 'text/html',
            href: 'https://podcasts.apple.com/us/podcast/50-years-of-hip-hop/id1667648172?uo=2'
          }
        },
        id: {
          label:
            'https://podcasts.apple.com/us/podcast/50-years-of-hip-hop/id1667648172?uo=2',
          attributes: { 'im:id': '1667648172' }
        },
        'im:contentType': { attributes: { term: 'Podcast', label: 'Podcast' } },
        category: {
          attributes: {
            'im:id': '1524',
            term: 'Music History',
            scheme:
              'https://podcasts.apple.com/us/genre/podcasts-music-music-history/id1524?uo=2',
            label: 'Music History'
          }
        },
        'im:releaseDate': {
          label: '2023-03-08T03:00:00-07:00',
          attributes: { label: 'March 8, 2023' }
        }
      },
      {
        'im:name': { label: 'Morgan Page - In The Air' },
        'im:image': [
          {
            label:
              'https://is4-ssl.mzstatic.com/image/thumb/Podcasts115/v4/14/24/b4/1424b4ea-ae83-5b55-41fd-ab02adcb8bcb/mza_7901858969215222366.jpg/55x55bb.png',
            attributes: { height: '55' }
          },
          {
            label:
              'https://is1-ssl.mzstatic.com/image/thumb/Podcasts115/v4/14/24/b4/1424b4ea-ae83-5b55-41fd-ab02adcb8bcb/mza_7901858969215222366.jpg/60x60bb.png',
            attributes: { height: '60' }
          },
          {
            label:
              'https://is4-ssl.mzstatic.com/image/thumb/Podcasts115/v4/14/24/b4/1424b4ea-ae83-5b55-41fd-ab02adcb8bcb/mza_7901858969215222366.jpg/170x170bb.png',
            attributes: { height: '170' }
          }
        ],
        summary: {
          label:
            'A mixshow with DJ/Producer Morgan Page.\n\nBecome a Patreon subscriber for access to the ITA archive, remix stems, and track feedback and mentorship:\nhttp://patreon.com/morganpage\n\nListen to other "In The Air" episodes:\nhttp://smarturl.it/InTheAirEpisodes\n\nFollow "In The Air" playlist on Spotify:\nhttp://spoti.fi/2lVkD4h\n\nSee Morgan Page on tour:\nhttp://bit.ly/34BRzA8'
        },
        'im:price': {
          label: 'Get',
          attributes: { amount: '0', currency: 'USD' }
        },
        'im:contentType': { attributes: { term: 'Podcast', label: 'Podcast' } },
        rights: { label: '© 2021 Morgan Page Productions' },
        title: { label: 'Morgan Page - In The Air - Morgan Page' },
        link: {
          attributes: {
            rel: 'alternate',
            type: 'text/html',
            href: 'https://podcasts.apple.com/us/podcast/morgan-page-in-the-air/id315306641?uo=2'
          }
        },
        id: {
          label:
            'https://podcasts.apple.com/us/podcast/morgan-page-in-the-air/id315306641?uo=2',
          attributes: { 'im:id': '315306641' }
        },
        'im:artist': { label: 'Morgan Page' },
        category: {
          attributes: {
            'im:id': '1310',
            term: 'Music',
            scheme:
              'https://podcasts.apple.com/us/genre/podcasts-music/id1310?uo=2',
            label: 'Music'
          }
        },
        'im:releaseDate': {
          label: '2023-03-06T14:19:00-07:00',
          attributes: { label: 'March 6, 2023' }
        }
      },
      {
        'im:name': { label: "People's Party with Talib Kweli" },
        'im:image': [
          {
            label:
              'https://is2-ssl.mzstatic.com/image/thumb/Podcasts112/v4/fc/1a/af/fc1aaf15-202a-e74c-df78-f516fcd20d80/mza_2545542276267717528.jpg/55x55bb.png',
            attributes: { height: '55' }
          },
          {
            label:
              'https://is4-ssl.mzstatic.com/image/thumb/Podcasts112/v4/fc/1a/af/fc1aaf15-202a-e74c-df78-f516fcd20d80/mza_2545542276267717528.jpg/60x60bb.png',
            attributes: { height: '60' }
          },
          {
            label:
              'https://is4-ssl.mzstatic.com/image/thumb/Podcasts112/v4/fc/1a/af/fc1aaf15-202a-e74c-df78-f516fcd20d80/mza_2545542276267717528.jpg/170x170bb.png',
            attributes: { height: '170' }
          }
        ],
        summary: {
          label:
            'People’s Party is a weekly interview show hosted by hip-hop legend Talib Kweli. The show features big-name guests exploring hip-hop, culture, and politics.'
        },
        'im:price': {
          label: 'Get',
          attributes: { amount: '0', currency: 'USD' }
        },
        'im:contentType': { attributes: { term: 'Podcast', label: 'Podcast' } },
        rights: { label: '© UPROXX' },
        title: { label: "People's Party with Talib Kweli - UPROXX" },
        link: {
          attributes: {
            rel: 'alternate',
            type: 'text/html',
            href: 'https://podcasts.apple.com/us/podcast/peoples-party-with-talib-kweli/id1467639342?uo=2'
          }
        },
        id: {
          label:
            'https://podcasts.apple.com/us/podcast/peoples-party-with-talib-kweli/id1467639342?uo=2',
          attributes: { 'im:id': '1467639342' }
        },
        'im:artist': { label: 'UPROXX' },
        category: {
          attributes: {
            'im:id': '1525',
            term: 'Music Interviews',
            scheme:
              'https://podcasts.apple.com/us/genre/podcasts-music-music-interviews/id1525?uo=2',
            label: 'Music Interviews'
          }
        },
        'im:releaseDate': {
          label: '2023-03-05T21:00:00-07:00',
          attributes: { label: 'March 5, 2023' }
        }
      },
      {
        'im:name': { label: 'Gold Rush' },
        'im:image': [
          {
            label:
              'https://is1-ssl.mzstatic.com/image/thumb/Podcasts112/v4/1d/67/34/1d67346c-e588-cae0-9267-ae04ec5f2cb1/mza_5005966285592090379.jpeg/55x55bb.png',
            attributes: { height: '55' }
          },
          {
            label:
              'https://is3-ssl.mzstatic.com/image/thumb/Podcasts112/v4/1d/67/34/1d67346c-e588-cae0-9267-ae04ec5f2cb1/mza_5005966285592090379.jpeg/60x60bb.png',
            attributes: { height: '60' }
          },
          {
            label:
              'https://is2-ssl.mzstatic.com/image/thumb/Podcasts112/v4/1d/67/34/1d67346c-e588-cae0-9267-ae04ec5f2cb1/mza_5005966285592090379.jpeg/170x170bb.png',
            attributes: { height: '170' }
          }
        ],
        summary: {
          label:
            'An anthology of the understated moments of Hip-Hop history that helped propel the once underground culture to become the biggest genre of music in the world. Hosted by esteemed Hip-Hop journalist, Sean Kantrowitz (Okayplayer, The Questions).'
        },
        'im:price': {
          label: 'Get',
          attributes: { amount: '0', currency: 'USD' }
        },
        'im:contentType': { attributes: { term: 'Podcast', label: 'Podcast' } },
        rights: { label: '© 2023 Stupid Fly Productions' },
        title: { label: 'Gold Rush - Stupid Fly' },
        link: {
          attributes: {
            rel: 'alternate',
            type: 'text/html',
            href: 'https://podcasts.apple.com/us/podcast/gold-rush/id1656879071?uo=2'
          }
        },
        id: {
          label:
            'https://podcasts.apple.com/us/podcast/gold-rush/id1656879071?uo=2',
          attributes: { 'im:id': '1656879071' }
        },
        'im:artist': { label: 'Stupid Fly' },
        category: {
          attributes: {
            'im:id': '1524',
            term: 'Music History',
            scheme:
              'https://podcasts.apple.com/us/genre/podcasts-music-music-history/id1524?uo=2',
            label: 'Music History'
          }
        },
        'im:releaseDate': {
          label: '2023-02-27T21:00:00-07:00',
          attributes: { label: 'February 27, 2023' }
        }
      },
      {
        'im:name': { label: 'The Rise Guys Podcast' },
        'im:image': [
          {
            label:
              'https://is3-ssl.mzstatic.com/image/thumb/Podcasts125/v4/f1/59/fa/f159fa45-e7f5-bfb6-31a8-5d6d7512c609/mza_14920477467648613325.jpg/55x55bb.png',
            attributes: { height: '55' }
          },
          {
            label:
              'https://is5-ssl.mzstatic.com/image/thumb/Podcasts125/v4/f1/59/fa/f159fa45-e7f5-bfb6-31a8-5d6d7512c609/mza_14920477467648613325.jpg/60x60bb.png',
            attributes: { height: '60' }
          },
          {
            label:
              'https://is2-ssl.mzstatic.com/image/thumb/Podcasts125/v4/f1/59/fa/f159fa45-e7f5-bfb6-31a8-5d6d7512c609/mza_14920477467648613325.jpg/170x170bb.png',
            attributes: { height: '170' }
          }
        ],
        summary: {
          label:
            'Welcome to the Rise Guys Morning Show! "The Saviors Of Upstate Morning Radio"\nbroke the mold when they hit the airwaves in 2003.  Originating from\nGreenville, South Carolina, Mattman, Nine, Paige & Fat Boy combine to deliver\nthe South\'s #1 Morning Radio Show everyday 5-10AM.  And serve as the\nleaders of the esteemed "P1 Family."  Relevant and Irreverant!  Gahlay,\nit\'s the Rise Guys!  And It Is Good!'
        },
        'im:price': {
          label: 'Get',
          attributes: { amount: '0', currency: 'USD' }
        },
        'im:contentType': { attributes: { term: 'Podcast', label: 'Podcast' } },
        rights: { label: '2023 © 2021 Audacy, Inc.' },
        title: { label: 'The Rise Guys Podcast - Audacy' },
        link: {
          attributes: {
            rel: 'alternate',
            type: 'text/html',
            href: 'https://podcasts.apple.com/us/podcast/the-rise-guys-podcast/id437608292?uo=2'
          }
        },
        id: {
          label:
            'https://podcasts.apple.com/us/podcast/the-rise-guys-podcast/id437608292?uo=2',
          attributes: { 'im:id': '437608292' }
        },
        'im:artist': { label: 'Audacy' },
        category: {
          attributes: {
            'im:id': '1310',
            term: 'Music',
            scheme:
              'https://podcasts.apple.com/us/genre/podcasts-music/id1310?uo=2',
            label: 'Music'
          }
        },
        'im:releaseDate': {
          label: '2023-03-06T07:08:00-07:00',
          attributes: { label: 'March 6, 2023' }
        }
      },
      {
        'im:name': { label: 'AXE TO GRIND PODCAST' },
        'im:image': [
          {
            label:
              'https://is3-ssl.mzstatic.com/image/thumb/Podcasts128/v4/3c/a5/45/3ca54543-e9d3-4a6a-fb2c-da2768ecd6c8/mza_8377173431694557853.jpg/55x55bb.png',
            attributes: { height: '55' }
          },
          {
            label:
              'https://is5-ssl.mzstatic.com/image/thumb/Podcasts128/v4/3c/a5/45/3ca54543-e9d3-4a6a-fb2c-da2768ecd6c8/mza_8377173431694557853.jpg/60x60bb.png',
            attributes: { height: '60' }
          },
          {
            label:
              'https://is2-ssl.mzstatic.com/image/thumb/Podcasts128/v4/3c/a5/45/3ca54543-e9d3-4a6a-fb2c-da2768ecd6c8/mza_8377173431694557853.jpg/170x170bb.png',
            attributes: { height: '170' }
          }
        ],
        summary: {
          label: 'THEE Hardcore Podcast, hosted by Tom, Bob, and Patrick.'
        },
        'im:price': {
          label: 'Get',
          attributes: { amount: '0', currency: 'USD' }
        },
        'im:contentType': { attributes: { term: 'Podcast', label: 'Podcast' } },
        rights: { label: '© AXE TO GRIND PODCAST & Sound Talent Media' },
        title: {
          label:
            'AXE TO GRIND PODCAST - AXE TO GRIND PODCAST & Sound Talent Media'
        },
        link: {
          attributes: {
            rel: 'alternate',
            type: 'text/html',
            href: 'https://podcasts.apple.com/us/podcast/axe-to-grind-podcast/id1330279268?uo=2'
          }
        },
        id: {
          label:
            'https://podcasts.apple.com/us/podcast/axe-to-grind-podcast/id1330279268?uo=2',
          attributes: { 'im:id': '1330279268' }
        },
        'im:artist': { label: 'AXE TO GRIND PODCAST & Sound Talent Media' },
        category: {
          attributes: {
            'im:id': '1310',
            term: 'Music',
            scheme:
              'https://podcasts.apple.com/us/genre/podcasts-music/id1310?uo=2',
            label: 'Music'
          }
        },
        'im:releaseDate': {
          label: '2023-02-28T03:00:00-07:00',
          attributes: { label: 'February 28, 2023' }
        }
      },
      {
        'im:name': { label: 'Biscuits & Jam' },
        'im:image': [
          {
            label:
              'https://is3-ssl.mzstatic.com/image/thumb/Podcasts122/v4/ee/0a/55/ee0a556c-7bd5-3095-ef8b-ffac45451d92/mza_10899017392449298741.jpeg/55x55bb.png',
            attributes: { height: '55' }
          },
          {
            label:
              'https://is5-ssl.mzstatic.com/image/thumb/Podcasts122/v4/ee/0a/55/ee0a556c-7bd5-3095-ef8b-ffac45451d92/mza_10899017392449298741.jpeg/60x60bb.png',
            attributes: { height: '60' }
          },
          {
            label:
              'https://is3-ssl.mzstatic.com/image/thumb/Podcasts122/v4/ee/0a/55/ee0a556c-7bd5-3095-ef8b-ffac45451d92/mza_10899017392449298741.jpeg/170x170bb.png',
            attributes: { height: '170' }
          }
        ],
        summary: {
          label:
            'In the South, talking about food is personal. It’s a way of sharing a part of your history, your family, your culture, and yourself. Each week, Sid Evans, Editor in Chief of Southern Living, will sit down with celebrity musicians to hear stories of how they grew up, what inspired them, and how they’ve been shaped by Southern culture. Sid will take us back to some of their most cherished memories and traditions, the family meals they still think about, and their favorite places to eat on the road.'
        },
        'im:price': {
          label: 'Get',
          attributes: { amount: '0', currency: 'USD' }
        },
        'im:contentType': { attributes: { term: 'Podcast', label: 'Podcast' } },
        rights: { label: '©2023 Meredith Corporation' },
        title: { label: 'Biscuits & Jam - Southern Living' },
        link: {
          attributes: {
            rel: 'alternate',
            type: 'text/html',
            href: 'https://podcasts.apple.com/us/podcast/biscuits-jam/id1510623480?uo=2'
          }
        },
        id: {
          label:
            'https://podcasts.apple.com/us/podcast/biscuits-jam/id1510623480?uo=2',
          attributes: { 'im:id': '1510623480' }
        },
        'im:artist': { label: 'Southern Living' },
        category: {
          attributes: {
            'im:id': '1310',
            term: 'Music',
            scheme:
              'https://podcasts.apple.com/us/genre/podcasts-music/id1310?uo=2',
            label: 'Music'
          }
        },
        'im:releaseDate': {
          label: '2023-02-21T01:00:00-07:00',
          attributes: { label: 'February 21, 2023' }
        }
      },
      {
        'im:name': { label: "Dean Delray's LET THERE BE TALK" },
        'im:image': [
          {
            label:
              'https://is1-ssl.mzstatic.com/image/thumb/Podcasts115/v4/d3/dc/6c/d3dc6cd2-90ed-6de4-600e-230a3eb722a2/mza_8210798205508895751.jpg/55x55bb.png',
            attributes: { height: '55' }
          },
          {
            label:
              'https://is3-ssl.mzstatic.com/image/thumb/Podcasts115/v4/d3/dc/6c/d3dc6cd2-90ed-6de4-600e-230a3eb722a2/mza_8210798205508895751.jpg/60x60bb.png',
            attributes: { height: '60' }
          },
          {
            label:
              'https://is4-ssl.mzstatic.com/image/thumb/Podcasts115/v4/d3/dc/6c/d3dc6cd2-90ed-6de4-600e-230a3eb722a2/mza_8210798205508895751.jpg/170x170bb.png',
            attributes: { height: '170' }
          }
        ],
        summary: {
          label:
            'Dean Delray\'s "Let There Be Talk." This original podcast is a unique blend of rock and comedy talk with some of the biggest names in music, comedy and entertainment.'
        },
        'im:price': {
          label: 'Get',
          attributes: { amount: '0', currency: 'USD' }
        },
        'im:contentType': { attributes: { term: 'Podcast', label: 'Podcast' } },
        rights: { label: '© dean delray 2012' },
        title: {
          label: "Dean Delray's LET THERE BE TALK - Cactus Radio Network"
        },
        link: {
          attributes: {
            rel: 'alternate',
            type: 'text/html',
            href: 'https://podcasts.apple.com/us/podcast/dean-delrays-let-there-be-talk/id546210508?uo=2'
          }
        },
        id: {
          label:
            'https://podcasts.apple.com/us/podcast/dean-delrays-let-there-be-talk/id546210508?uo=2',
          attributes: { 'im:id': '546210508' }
        },
        'im:artist': { label: 'Cactus Radio Network' },
        category: {
          attributes: {
            'im:id': '1525',
            term: 'Music Interviews',
            scheme:
              'https://podcasts.apple.com/us/genre/podcasts-music-music-interviews/id1525?uo=2',
            label: 'Music Interviews'
          }
        },
        'im:releaseDate': {
          label: '2023-02-27T16:46:00-07:00',
          attributes: { label: 'February 27, 2023' }
        }
      },
      {
        'im:name': { label: 'Cosmic Gate: WYM Radio' },
        'im:image': [
          {
            label:
              'https://is1-ssl.mzstatic.com/image/thumb/Podcasts115/v4/46/2b/a5/462ba55a-e894-1757-9ec2-911c1668e41a/mza_14693079646080161172.jpg/55x55bb.png',
            attributes: { height: '55' }
          },
          {
            label:
              'https://is3-ssl.mzstatic.com/image/thumb/Podcasts115/v4/46/2b/a5/462ba55a-e894-1757-9ec2-911c1668e41a/mza_14693079646080161172.jpg/60x60bb.png',
            attributes: { height: '60' }
          },
          {
            label:
              'https://is4-ssl.mzstatic.com/image/thumb/Podcasts115/v4/46/2b/a5/462ba55a-e894-1757-9ec2-911c1668e41a/mza_14693079646080161172.jpg/170x170bb.png',
            attributes: { height: '170' }
          }
        ],
        summary: {
          label:
            'Its three words that turned from a rally cry to their fans into an acclaimed artist album, a social media sensation and most recently a record label. Now, magnifying that meaning once again, this April Cosmic Gate are pleased to announce the latest development in their #WYM marque. Bringing a new level of definition to Wake Your Mind’s sound, prepare yourself for Wake You Mind Radio. Across 60 minutes, the fully formatted weekly show will feature Nic & Bossi discussing and airing the tracks that have been setting their floors on fire. It’ll also encompass first-listen music premieres and tracks from the deeper side of the WYM psyche. The show will also feature comprehensive info on up-and-coming gigs, Nic & Bossi’s biggest hitting tune of the week and WYMR will also be a first port of call for breaking news on the fast-approaching sixth Cosmic Gate artist album.'
        },
        'im:price': {
          label: 'Get',
          attributes: { amount: '0', currency: 'USD' }
        },
        'im:contentType': { attributes: { term: 'Podcast', label: 'Podcast' } },
        rights: { label: '© Cosmic Gate' },
        title: { label: 'Cosmic Gate: WYM Radio - Cosmic Gate' },
        link: {
          attributes: {
            rel: 'alternate',
            type: 'text/html',
            href: 'https://podcasts.apple.com/us/podcast/cosmic-gate-wym-radio/id862312494?uo=2'
          }
        },
        id: {
          label:
            'https://podcasts.apple.com/us/podcast/cosmic-gate-wym-radio/id862312494?uo=2',
          attributes: { 'im:id': '862312494' }
        },
        'im:artist': { label: 'Cosmic Gate' },
        category: {
          attributes: {
            'im:id': '1310',
            term: 'Music',
            scheme:
              'https://podcasts.apple.com/us/genre/podcasts-music/id1310?uo=2',
            label: 'Music'
          }
        },
        'im:releaseDate': {
          label: '2023-02-27T01:29:00-07:00',
          attributes: { label: 'February 27, 2023' }
        }
      },
      {
        'im:name': { label: 'The Martin Garrix Show' },
        'im:image': [
          {
            label:
              'https://is5-ssl.mzstatic.com/image/thumb/Podcasts126/v4/8f/95/04/8f9504bb-1650-17b7-65d6-423d7d600c86/mza_4272909025442545249.jpg/55x55bb.png',
            attributes: { height: '55' }
          },
          {
            label:
              'https://is2-ssl.mzstatic.com/image/thumb/Podcasts126/v4/8f/95/04/8f9504bb-1650-17b7-65d6-423d7d600c86/mza_4272909025442545249.jpg/60x60bb.png',
            attributes: { height: '60' }
          },
          {
            label:
              'https://is5-ssl.mzstatic.com/image/thumb/Podcasts126/v4/8f/95/04/8f9504bb-1650-17b7-65d6-423d7d600c86/mza_4272909025442545249.jpg/170x170bb.png',
            attributes: { height: '170' }
          }
        ],
        summary: {
          label:
            'A weekly selection of tracks that I love to listen to at home or play out at a party.'
        },
        'im:price': {
          label: 'Get',
          attributes: { amount: '0', currency: 'USD' }
        },
        'im:contentType': { attributes: { term: 'Podcast', label: 'Podcast' } },
        rights: { label: '© 2023 The Martin Garrix Show' },
        title: { label: 'The Martin Garrix Show - Martin Garrix' },
        link: {
          attributes: {
            rel: 'alternate',
            type: 'text/html',
            href: 'https://podcasts.apple.com/us/podcast/the-martin-garrix-show/id1132914986?uo=2'
          }
        },
        id: {
          label:
            'https://podcasts.apple.com/us/podcast/the-martin-garrix-show/id1132914986?uo=2',
          attributes: { 'im:id': '1132914986' }
        },
        'im:artist': { label: 'Martin Garrix' },
        category: {
          attributes: {
            'im:id': '1310',
            term: 'Music',
            scheme:
              'https://podcasts.apple.com/us/genre/podcasts-music/id1310?uo=2',
            label: 'Music'
          }
        },
        'im:releaseDate': {
          label: '2023-02-26T08:00:00-07:00',
          attributes: { label: 'February 26, 2023' }
        }
      },
      {
        'im:name': { label: 'Agushto Papa Podcast' },
        'im:image': [
          {
            label:
              'https://is2-ssl.mzstatic.com/image/thumb/Podcasts112/v4/79/cb/a0/79cba0e5-ec9b-ef93-4e71-b008ebb5c56c/mza_531851479407142669.jpg/55x55bb.png',
            attributes: { height: '55' }
          },
          {
            label:
              'https://is4-ssl.mzstatic.com/image/thumb/Podcasts112/v4/79/cb/a0/79cba0e5-ec9b-ef93-4e71-b008ebb5c56c/mza_531851479407142669.jpg/60x60bb.png',
            attributes: { height: '60' }
          },
          {
            label:
              'https://is5-ssl.mzstatic.com/image/thumb/Podcasts112/v4/79/cb/a0/79cba0e5-ec9b-ef93-4e71-b008ebb5c56c/mza_531851479407142669.jpg/170x170bb.png',
            attributes: { height: '170' }
          }
        ],
        summary: { label: 'The official podcast of Agushto Papa.' },
        'im:price': {
          label: 'Get',
          attributes: { amount: '0', currency: 'USD' }
        },
        'im:contentType': { attributes: { term: 'Podcast', label: 'Podcast' } },
        rights: { label: '© 2023 Agushto Papa Podcast' },
        title: { label: 'Agushto Papa Podcast - Agushto LLC' },
        link: {
          attributes: {
            rel: 'alternate',
            type: 'text/html',
            href: 'https://podcasts.apple.com/us/podcast/agushto-papa-podcast/id1560925561?uo=2'
          }
        },
        id: {
          label:
            'https://podcasts.apple.com/us/podcast/agushto-papa-podcast/id1560925561?uo=2',
          attributes: { 'im:id': '1560925561' }
        },
        'im:artist': { label: 'Agushto LLC' },
        category: {
          attributes: {
            'im:id': '1525',
            term: 'Music Interviews',
            scheme:
              'https://podcasts.apple.com/us/genre/podcasts-music-music-interviews/id1525?uo=2',
            label: 'Music Interviews'
          }
        },
        'im:releaseDate': {
          label: '2023-01-09T01:00:00-07:00',
          attributes: { label: 'January 9, 2023' }
        }
      },
      {
        'im:name': { label: 'Afrojack - JACKED Radio (Official Podcast)' },
        'im:image': [
          {
            label:
              'https://is1-ssl.mzstatic.com/image/thumb/Podcasts112/v4/33/61/e9/3361e914-e4a3-cb13-40bb-5554a24aa8a4/mza_12832889788386799120.jpg/55x55bb.png',
            attributes: { height: '55' }
          },
          {
            label:
              'https://is3-ssl.mzstatic.com/image/thumb/Podcasts112/v4/33/61/e9/3361e914-e4a3-cb13-40bb-5554a24aa8a4/mza_12832889788386799120.jpg/60x60bb.png',
            attributes: { height: '60' }
          },
          {
            label:
              'https://is3-ssl.mzstatic.com/image/thumb/Podcasts112/v4/33/61/e9/3361e914-e4a3-cb13-40bb-5554a24aa8a4/mza_12832889788386799120.jpg/170x170bb.png',
            attributes: { height: '170' }
          }
        ],
        summary: {
          label:
            "In the span of less than 2 years, Afrojack has become one of electronic dance music's major icons. From humble DJ beginnings in his native country of Holland, he has grown to become a multi-award winning, platinum-selling producer. His skills are some of the most sought after in the world, and with two Grammy Awards under his belt, it's easy to see why. In addition to this, his DJ sets have fast become both iconic and unparalleled, providing an explosive take on the current state of dance music across the board. Produced by NoiseHouse www.noisehouse.com."
        },
        'im:price': {
          label: 'Get',
          attributes: { amount: '0', currency: 'USD' }
        },
        'im:contentType': { attributes: { term: 'Podcast', label: 'Podcast' } },
        rights: { label: '© Afrojack' },
        title: {
          label: 'Afrojack - JACKED Radio (Official Podcast) - Afrojack'
        },
        link: {
          attributes: {
            rel: 'alternate',
            type: 'text/html',
            href: 'https://podcasts.apple.com/us/podcast/afrojack-jacked-radio-official-podcast/id686784798?uo=2'
          }
        },
        id: {
          label:
            'https://podcasts.apple.com/us/podcast/afrojack-jacked-radio-official-podcast/id686784798?uo=2',
          attributes: { 'im:id': '686784798' }
        },
        'im:artist': { label: 'Afrojack' },
        category: {
          attributes: {
            'im:id': '1310',
            term: 'Music',
            scheme:
              'https://podcasts.apple.com/us/genre/podcasts-music/id1310?uo=2',
            label: 'Music'
          }
        },
        'im:releaseDate': {
          label: '2023-02-24T17:30:00-07:00',
          attributes: { label: 'February 24, 2023' }
        }
      },
      {
        'im:name': { label: 'Radio Wonderland' },
        'im:image': [
          {
            label:
              'https://is3-ssl.mzstatic.com/image/thumb/Podcasts115/v4/88/22/2f/88222fb4-4788-65bd-0388-b603532a3cd9/mza_15724627577799066578.jpg/55x55bb.png',
            attributes: { height: '55' }
          },
          {
            label:
              'https://is5-ssl.mzstatic.com/image/thumb/Podcasts115/v4/88/22/2f/88222fb4-4788-65bd-0388-b603532a3cd9/mza_15724627577799066578.jpg/60x60bb.png',
            attributes: { height: '60' }
          },
          {
            label:
              'https://is1-ssl.mzstatic.com/image/thumb/Podcasts115/v4/88/22/2f/88222fb4-4788-65bd-0388-b603532a3cd9/mza_15724627577799066578.jpg/170x170bb.png',
            attributes: { height: '170' }
          }
        ],
        summary: {
          label:
            'Dj & producer Alison Wonderland hosts weekly show "Radio Wonderland" playing her favorite tunes across a range of electronic genres.  She will be featuring interviews and guest mixes/selections from her musical friends in a section called 808s and Mates. As well as a weekly throw back track in the Wonder Years feature. Get ready for anything.\n\nTweet in your requests for next week with the hashtag #radiowonderland\n\nFacebook - www.facebook.com/awonderdj \n\nTwitter - @awonderdj'
        },
        'im:price': {
          label: 'Get',
          attributes: { amount: '0', currency: 'USD' }
        },
        'im:contentType': { attributes: { term: 'Podcast', label: 'Podcast' } },
        rights: { label: '© Alison Wonderland' },
        title: { label: 'Radio Wonderland - Alison Wonderland' },
        link: {
          attributes: {
            rel: 'alternate',
            type: 'text/html',
            href: 'https://podcasts.apple.com/us/podcast/radio-wonderland/id1233359606?uo=2'
          }
        },
        id: {
          label:
            'https://podcasts.apple.com/us/podcast/radio-wonderland/id1233359606?uo=2',
          attributes: { 'im:id': '1233359606' }
        },
        'im:artist': { label: 'Alison Wonderland' },
        category: {
          attributes: {
            'im:id': '1310',
            term: 'Music',
            scheme:
              'https://podcasts.apple.com/us/genre/podcasts-music/id1310?uo=2',
            label: 'Music'
          }
        },
        'im:releaseDate': {
          label: '2023-02-27T08:00:00-07:00',
          attributes: { label: 'February 27, 2023' }
        }
      },
      {
        'im:name': { label: 'Dipped In Tone' },
        'im:image': [
          {
            label:
              'https://is2-ssl.mzstatic.com/image/thumb/Podcasts122/v4/d8/1b/c0/d81bc0b9-762c-aa5c-d25b-21a0d3ab1ac7/mza_6935291529645314086.png/55x55bb.png',
            attributes: { height: '55' }
          },
          {
            label:
              'https://is1-ssl.mzstatic.com/image/thumb/Podcasts122/v4/d8/1b/c0/d81bc0b9-762c-aa5c-d25b-21a0d3ab1ac7/mza_6935291529645314086.png/60x60bb.png',
            attributes: { height: '60' }
          },
          {
            label:
              'https://is3-ssl.mzstatic.com/image/thumb/Podcasts122/v4/d8/1b/c0/d81bc0b9-762c-aa5c-d25b-21a0d3ab1ac7/mza_6935291529645314086.png/170x170bb.png',
            attributes: { height: '170' }
          }
        ],
        summary: {
          label:
            'Rhett Shull and Zach Broyles combine their music and gear industry knowledge for this weekly podcast. Together they discuss news, talk gear, debunk myths, and much more.'
        },
        'im:price': {
          label: 'Get',
          attributes: { amount: '0', currency: 'USD' }
        },
        'im:contentType': { attributes: { term: 'Podcast', label: 'Podcast' } },
        rights: { label: '© Premier Guitar / Dipped in Tone' },
        title: { label: 'Dipped In Tone - Dipped in Tone' },
        link: {
          attributes: {
            rel: 'alternate',
            type: 'text/html',
            href: 'https://podcasts.apple.com/us/podcast/dipped-in-tone/id1531548700?uo=2'
          }
        },
        id: {
          label:
            'https://podcasts.apple.com/us/podcast/dipped-in-tone/id1531548700?uo=2',
          attributes: { 'im:id': '1531548700' }
        },
        'im:artist': { label: 'Dipped in Tone' },
        category: {
          attributes: {
            'im:id': '1523',
            term: 'Music Commentary',
            scheme:
              'https://podcasts.apple.com/us/genre/podcasts-music-music-commentary/id1523?uo=2',
            label: 'Music Commentary'
          }
        },
        'im:releaseDate': {
          label: '2023-02-19T22:00:00-07:00',
          attributes: { label: 'February 19, 2023' }
        }
      },
      {
        'im:name': { label: 'GET REAL w/ Ashley, Peniel, and JUNNY' },
        'im:image': [
          {
            label:
              'https://is1-ssl.mzstatic.com/image/thumb/Podcasts112/v4/bd/f9/91/bdf9913b-8e15-6633-3710-85ead262046a/mza_14502020285759415053.jpg/55x55bb.png',
            attributes: { height: '55' }
          },
          {
            label:
              'https://is3-ssl.mzstatic.com/image/thumb/Podcasts112/v4/bd/f9/91/bdf9913b-8e15-6633-3710-85ead262046a/mza_14502020285759415053.jpg/60x60bb.png',
            attributes: { height: '60' }
          },
          {
            label:
              'https://is2-ssl.mzstatic.com/image/thumb/Podcasts112/v4/bd/f9/91/bdf9913b-8e15-6633-3710-85ead262046a/mza_14502020285759415053.jpg/170x170bb.png',
            attributes: { height: '170' }
          }
        ],
        summary: {
          label:
            "📲 Download DIVE Studios' daily wellness app (for FREE) at www.getmindset.com\n\nIdols by day and podcast hosts by night Ashley Choi, Peniel (of BTOB), and JUNNY are here to GET REAL. This show is a place for these close friends to open up about all the ups and downs of work, love, and adulthood from their perspective. \n\n🤳 FOLLOW US ON SOCIALS 🤳\nTikTok (1.1 million): www.tiktok.com/@divestudios\nInstagram (400k+): www.instagram.com/thedivestudios\nInstagram (180k+): www.twitter.com/thedivestudios\nDiscord (45k+ members): www.discord.gg/divemindset\n\nFor advertising opportunities please email PodcastPartnerships@Studio71us.com\nPrivacy Policy: https://www.studio71.com/us/terms-and-conditions-use/#Privacy%20Policy"
        },
        'im:price': {
          label: 'Get',
          attributes: { amount: '0', currency: 'USD' }
        },
        'im:contentType': { attributes: { term: 'Podcast', label: 'Podcast' } },
        rights: { label: '© DIVE Studios & Studio71' },
        title: {
          label:
            'GET REAL w/ Ashley, Peniel, and JUNNY - DIVE Studios & Studio71'
        },
        link: {
          attributes: {
            rel: 'alternate',
            type: 'text/html',
            href: 'https://podcasts.apple.com/us/podcast/get-real-w-ashley-peniel-and-junny/id1520894322?uo=2'
          }
        },
        id: {
          label:
            'https://podcasts.apple.com/us/podcast/get-real-w-ashley-peniel-and-junny/id1520894322?uo=2',
          attributes: { 'im:id': '1520894322' }
        },
        'im:artist': {
          label: 'DIVE Studios & Studio71',
          attributes: {
            href: 'https://podcasts.apple.com/us/artist/dive-studios/1475367137?uo=2'
          }
        },
        category: {
          attributes: {
            'im:id': '1523',
            term: 'Music Commentary',
            scheme:
              'https://podcasts.apple.com/us/genre/podcasts-music-music-commentary/id1523?uo=2',
            label: 'Music Commentary'
          }
        },
        'im:releaseDate': {
          label: '2023-02-23T17:00:00-07:00',
          attributes: { label: 'February 23, 2023' }
        }
      },
      {
        'im:name': { label: 'What Had Happened Was' },
        'im:image': [
          {
            label:
              'https://is3-ssl.mzstatic.com/image/thumb/Podcasts122/v4/7c/c7/73/7cc77351-53f7-44be-0f15-5a63a8a4a1d9/mza_12852665745668328029.jpeg/55x55bb.png',
            attributes: { height: '55' }
          },
          {
            label:
              'https://is5-ssl.mzstatic.com/image/thumb/Podcasts122/v4/7c/c7/73/7cc77351-53f7-44be-0f15-5a63a8a4a1d9/mza_12852665745668328029.jpeg/60x60bb.png',
            attributes: { height: '60' }
          },
          {
            label:
              'https://is1-ssl.mzstatic.com/image/thumb/Podcasts122/v4/7c/c7/73/7cc77351-53f7-44be-0f15-5a63a8a4a1d9/mza_12852665745668328029.jpeg/170x170bb.png',
            attributes: { height: '170' }
          }
        ],
        summary: {
          label:
            'Open Mike Eagle Sits down with the legendary creators in hip-hop to discuss their life, impact, and legacy over the course of a season. Season one covers DJ Prince Paul (De La Soul, Handsome Boy Modeling School). Season two covers El-P (Company Flow, Run the Jewels). Season three features legendary hip-hop A&R/producer Dante Ross. Brought to you by Stony Island Audio.'
        },
        'im:price': {
          label: 'Get',
          attributes: { amount: '0', currency: 'USD' }
        },
        'im:contentType': { attributes: { term: 'Podcast', label: 'Podcast' } },
        rights: { label: '© Stony Island Audio' },
        title: {
          label: 'What Had Happened Was - Stony Island Audio & Talkhouse'
        },
        link: {
          attributes: {
            rel: 'alternate',
            type: 'text/html',
            href: 'https://podcasts.apple.com/us/podcast/what-had-happened-was/id1520209791?uo=2'
          }
        },
        id: {
          label:
            'https://podcasts.apple.com/us/podcast/what-had-happened-was/id1520209791?uo=2',
          attributes: { 'im:id': '1520209791' }
        },
        'im:artist': {
          label: 'Stony Island Audio & Talkhouse',
          attributes: {
            href: 'https://podcasts.apple.com/us/artist/starburns-audio/541109260?uo=2'
          }
        },
        category: {
          attributes: {
            'im:id': '1525',
            term: 'Music Interviews',
            scheme:
              'https://podcasts.apple.com/us/genre/podcasts-music-music-interviews/id1525?uo=2',
            label: 'Music Interviews'
          }
        },
        'im:releaseDate': {
          label: '2022-09-21T03:00:00-07:00',
          attributes: { label: 'September 21, 2022' }
        }
      },
      {
        'im:name': { label: 'The Street Stoic' },
        'im:image': [
          {
            label:
              'https://is4-ssl.mzstatic.com/image/thumb/Podcasts113/v4/60/bd/17/60bd17b1-bee7-4bef-6cae-9cd6030eec4a/mza_8056323085310390159.jpg/55x55bb.png',
            attributes: { height: '55' }
          },
          {
            label:
              'https://is1-ssl.mzstatic.com/image/thumb/Podcasts113/v4/60/bd/17/60bd17b1-bee7-4bef-6cae-9cd6030eec4a/mza_8056323085310390159.jpg/60x60bb.png',
            attributes: { height: '60' }
          },
          {
            label:
              'https://is5-ssl.mzstatic.com/image/thumb/Podcasts113/v4/60/bd/17/60bd17b1-bee7-4bef-6cae-9cd6030eec4a/mza_8056323085310390159.jpg/170x170bb.png',
            attributes: { height: '170' }
          }
        ],
        summary: {
          label:
            '“The Street Stoic” is a podcast that invites listeners in for their daily shot of inspiration by combining Hip Hop lyrics with ancient Stoic philosophy. Hosted by Dramos, whose voice has been heard from The Breakfast Club to New York’s Z100 and most recently his “Life as a Gringo” podcast; the show creates a practical approach on how to live a happier and more fulfilled life.'
        },
        'im:price': {
          label: 'Get',
          attributes: { amount: '0', currency: 'USD' }
        },
        'im:contentType': { attributes: { term: 'Podcast', label: 'Podcast' } },
        rights: { label: '© 2023 iHeartPodcasts' },
        title: { label: 'The Street Stoic - My Cultura and iHeartPodcasts' },
        link: {
          attributes: {
            rel: 'alternate',
            type: 'text/html',
            href: 'https://podcasts.apple.com/us/podcast/the-street-stoic/id1662422894?uo=2'
          }
        },
        id: {
          label:
            'https://podcasts.apple.com/us/podcast/the-street-stoic/id1662422894?uo=2',
          attributes: { 'im:id': '1662422894' }
        },
        'im:artist': { label: 'My Cultura and iHeartPodcasts' },
        category: {
          attributes: {
            'im:id': '1310',
            term: 'Music',
            scheme:
              'https://podcasts.apple.com/us/genre/podcasts-music/id1310?uo=2',
            label: 'Music'
          }
        },
        'im:releaseDate': {
          label: '2023-03-07T00:00:00-07:00',
          attributes: { label: 'March 7, 2023' }
        }
      },
      {
        'im:name': { label: 'Clapcast from Claptone' },
        'im:image': [
          {
            label:
              'https://is2-ssl.mzstatic.com/image/thumb/Podcasts125/v4/ba/79/1f/ba791f66-d2cc-be7a-9112-3be9929c0e57/mza_4263886667872035578.jpg/55x55bb.png',
            attributes: { height: '55' }
          },
          {
            label:
              'https://is1-ssl.mzstatic.com/image/thumb/Podcasts125/v4/ba/79/1f/ba791f66-d2cc-be7a-9112-3be9929c0e57/mza_4263886667872035578.jpg/60x60bb.png',
            attributes: { height: '60' }
          },
          {
            label:
              'https://is1-ssl.mzstatic.com/image/thumb/Podcasts125/v4/ba/79/1f/ba791f66-d2cc-be7a-9112-3be9929c0e57/mza_4263886667872035578.jpg/170x170bb.png',
            attributes: { height: '170' }
          }
        ],
        summary: {
          label:
            'Be a part of the journey and allow Claptone to transport you to a place of sonic delights, with a mix designed to enchant outside of the club. Follow our golden masked friend and be the first to hear the new editions of the CLAPCAST tale...'
        },
        'im:price': {
          label: 'Get',
          attributes: { amount: '0', currency: 'USD' }
        },
        'im:contentType': { attributes: { term: 'Podcast', label: 'Podcast' } },
        rights: { label: '© Claptone' },
        title: { label: 'Clapcast from Claptone - Claptone' },
        link: {
          attributes: {
            rel: 'alternate',
            type: 'text/html',
            href: 'https://podcasts.apple.com/us/podcast/clapcast-from-claptone/id911777602?uo=2'
          }
        },
        id: {
          label:
            'https://podcasts.apple.com/us/podcast/clapcast-from-claptone/id911777602?uo=2',
          attributes: { 'im:id': '911777602' }
        },
        'im:artist': {
          label: 'Claptone',
          attributes: {
            href: 'https://podcasts.apple.com/us/artist/this-is-distorted/961280048?uo=2'
          }
        },
        category: {
          attributes: {
            'im:id': '1310',
            term: 'Music',
            scheme:
              'https://podcasts.apple.com/us/genre/podcasts-music/id1310?uo=2',
            label: 'Music'
          }
        },
        'im:releaseDate': {
          label: '2023-02-27T01:00:00-07:00',
          attributes: { label: 'February 27, 2023' }
        }
      },
      {
        'im:name': { label: 'Every Single Album' },
        'im:image': [
          {
            label:
              'https://is4-ssl.mzstatic.com/image/thumb/Podcasts112/v4/1e/fc/46/1efc46d5-c89a-8112-6dbf-2b20abebd8b7/mza_10454285608348160397.jpg/55x55bb.png',
            attributes: { height: '55' }
          },
          {
            label:
              'https://is1-ssl.mzstatic.com/image/thumb/Podcasts112/v4/1e/fc/46/1efc46d5-c89a-8112-6dbf-2b20abebd8b7/mza_10454285608348160397.jpg/60x60bb.png',
            attributes: { height: '60' }
          },
          {
            label:
              'https://is5-ssl.mzstatic.com/image/thumb/Podcasts112/v4/1e/fc/46/1efc46d5-c89a-8112-6dbf-2b20abebd8b7/mza_10454285608348160397.jpg/170x170bb.png',
            attributes: { height: '170' }
          }
        ],
        summary: {
          label:
            "Nora Princiotti and Nathan Hubbard are two pop music enthusiasts. Together, they break down every single album from some of your favorite stars, like Taylor Swift, Adele, and Harry Styles. Topics include favorite collaborators, track five meanings, where these artists get their inspiration, and more.\nJoin them starting October 11th as they get ready for the release of Taylor Swift's newest album, 'Midnights.'"
        },
        'im:price': {
          label: 'Get',
          attributes: { amount: '0', currency: 'USD' }
        },
        'im:contentType': { attributes: { term: 'Podcast', label: 'Podcast' } },
        rights: { label: '© All rights reserved.' },
        title: { label: 'Every Single Album - The Ringer' },
        link: {
          attributes: {
            rel: 'alternate',
            type: 'text/html',
            href: 'https://podcasts.apple.com/us/podcast/every-single-album/id1592726009?uo=2'
          }
        },
        id: {
          label:
            'https://podcasts.apple.com/us/podcast/every-single-album/id1592726009?uo=2',
          attributes: { 'im:id': '1592726009' }
        },
        'im:artist': { label: 'The Ringer' },
        category: {
          attributes: {
            'im:id': '1523',
            term: 'Music Commentary',
            scheme:
              'https://podcasts.apple.com/us/genre/podcasts-music-music-commentary/id1523?uo=2',
            label: 'Music Commentary'
          }
        },
        'im:releaseDate': {
          label: '2022-11-02T09:31:00-07:00',
          attributes: { label: 'November 2, 2022' }
        }
      },
      {
        'im:name': { label: 'NFR Podcast' },
        'im:image': [
          {
            label:
              'https://is2-ssl.mzstatic.com/image/thumb/Podcasts116/v4/90/55/53/9055536b-2383-f8cb-14d5-580c86a8692c/mza_13456004868401458632.jpg/55x55bb.png',
            attributes: { height: '55' }
          },
          {
            label:
              'https://is4-ssl.mzstatic.com/image/thumb/Podcasts116/v4/90/55/53/9055536b-2383-f8cb-14d5-580c86a8692c/mza_13456004868401458632.jpg/60x60bb.png',
            attributes: { height: '60' }
          },
          {
            label:
              'https://is3-ssl.mzstatic.com/image/thumb/Podcasts116/v4/90/55/53/9055536b-2383-f8cb-14d5-580c86a8692c/mza_13456004868401458632.jpg/170x170bb.png',
            attributes: { height: '170' }
          }
        ],
        summary: {
          label:
            'Join Luca and Anthony every week as they recommend some of the best new releases and throwbacks that the music world has to offer. NFR’s exclusive audio experience offers listeners the chance to explore and discover new music.'
        },
        'im:price': {
          label: 'Get',
          attributes: { amount: '0', currency: 'USD' }
        },
        'im:contentType': { attributes: { term: 'Podcast', label: 'Podcast' } },
        rights: { label: '© NFR Podcast' },
        title: { label: 'NFR Podcast - NFR Podcast' },
        link: {
          attributes: {
            rel: 'alternate',
            type: 'text/html',
            href: 'https://podcasts.apple.com/us/podcast/nfr-podcast/id1555301078?uo=2'
          }
        },
        id: {
          label:
            'https://podcasts.apple.com/us/podcast/nfr-podcast/id1555301078?uo=2',
          attributes: { 'im:id': '1555301078' }
        },
        'im:artist': { label: 'NFR Podcast' },
        category: {
          attributes: {
            'im:id': '1523',
            term: 'Music Commentary',
            scheme:
              'https://podcasts.apple.com/us/genre/podcasts-music-music-commentary/id1523?uo=2',
            label: 'Music Commentary'
          }
        },
        'im:releaseDate': {
          label: '2023-03-02T10:01:00-07:00',
          attributes: { label: 'March 2, 2023' }
        }
      },
      {
        'im:name': {
          label:
            'Calm Pills - Soothing Space Ambient and Piano Music for Relaxing, Peaceful Sleep, Reading or Mindful Meditation'
        },
        'im:image': [
          {
            label:
              'https://is3-ssl.mzstatic.com/image/thumb/Podcasts124/v4/61/a2/b9/61a2b926-7a87-88ac-f1d8-9c2af4bba0b1/mza_8881261233510821110.jpg/55x55bb.png',
            attributes: { height: '55' }
          },
          {
            label:
              'https://is5-ssl.mzstatic.com/image/thumb/Podcasts124/v4/61/a2/b9/61a2b926-7a87-88ac-f1d8-9c2af4bba0b1/mza_8881261233510821110.jpg/60x60bb.png',
            attributes: { height: '60' }
          },
          {
            label:
              'https://is3-ssl.mzstatic.com/image/thumb/Podcasts124/v4/61/a2/b9/61a2b926-7a87-88ac-f1d8-9c2af4bba0b1/mza_8881261233510821110.jpg/170x170bb.png',
            attributes: { height: '170' }
          }
        ],
        summary: {
          label:
            'Calm Pills are ad-free, multi-artist ambient albums, seamlessly mixed to help with relaxation, meditation, reading or deep sleep. Mostly consisting of instrumental ambient sounds, natural soundscapes and soft piano music, these mixes will help you completely relax your mind and body.  Also available as online radio and through Alexa or Google smart speakers: CalmRadio.UpliftingPills.com'
        },
        'im:price': {
          label: 'Get',
          attributes: { amount: '0', currency: 'USD' }
        },
        'im:contentType': { attributes: { term: 'Podcast', label: 'Podcast' } },
        rights: { label: '© Uplifting Pills' },
        title: {
          label:
            'Calm Pills - Soothing Space Ambient and Piano Music for Relaxing, Peaceful Sleep, Reading or Mindful Meditation - Uplifting Pills'
        },
        link: {
          attributes: {
            rel: 'alternate',
            type: 'text/html',
            href: 'https://podcasts.apple.com/us/podcast/calm-pills-soothing-space-ambient-and-piano-music-for/id1173559723?uo=2'
          }
        },
        id: {
          label:
            'https://podcasts.apple.com/us/podcast/calm-pills-soothing-space-ambient-and-piano-music-for/id1173559723?uo=2',
          attributes: { 'im:id': '1173559723' }
        },
        'im:artist': { label: 'Uplifting Pills' },
        category: {
          attributes: {
            'im:id': '1310',
            term: 'Music',
            scheme:
              'https://podcasts.apple.com/us/genre/podcasts-music/id1310?uo=2',
            label: 'Music'
          }
        },
        'im:releaseDate': {
          label: '2023-01-09T21:00:00-07:00',
          attributes: { label: 'January 9, 2023' }
        }
      },
      {
        'im:name': { label: 'POSH DJs Podcast' },
        'im:image': [
          {
            label:
              'https://is5-ssl.mzstatic.com/image/thumb/Podcasts125/v4/ec/13/49/ec134936-8b9f-d145-33c3-2759c9920af1/mza_7262106535865543777.jpg/55x55bb.png',
            attributes: { height: '55' }
          },
          {
            label:
              'https://is2-ssl.mzstatic.com/image/thumb/Podcasts125/v4/ec/13/49/ec134936-8b9f-d145-33c3-2759c9920af1/mza_7262106535865543777.jpg/60x60bb.png',
            attributes: { height: '60' }
          },
          {
            label:
              'https://is2-ssl.mzstatic.com/image/thumb/Podcasts125/v4/ec/13/49/ec134936-8b9f-d145-33c3-2759c9920af1/mza_7262106535865543777.jpg/170x170bb.png',
            attributes: { height: '170' }
          }
        ],
        summary: {
          label:
            'This podcast features DJ Mixes mixed only by POSH DJs.  Updated Weekly.'
        },
        'im:price': {
          label: 'Get',
          attributes: { amount: '0', currency: 'USD' }
        },
        'im:contentType': { attributes: { term: 'Podcast', label: 'Podcast' } },
        rights: { label: '© POSH Entertainment' },
        title: { label: 'POSH DJs Podcast - POSH Entertainment' },
        link: {
          attributes: {
            rel: 'alternate',
            type: 'text/html',
            href: 'https://podcasts.apple.com/us/podcast/posh-djs-podcast/id633807223?uo=2'
          }
        },
        id: {
          label:
            'https://podcasts.apple.com/us/podcast/posh-djs-podcast/id633807223?uo=2',
          attributes: { 'im:id': '633807223' }
        },
        'im:artist': { label: 'POSH Entertainment' },
        category: {
          attributes: {
            'im:id': '1310',
            term: 'Music',
            scheme:
              'https://podcasts.apple.com/us/genre/podcasts-music/id1310?uo=2',
            label: 'Music'
          }
        },
        'im:releaseDate': {
          label: '2023-03-05T21:29:00-07:00',
          attributes: { label: 'March 5, 2023' }
        }
      }
    ],
    updated: { label: '2023-03-08T03:28:31-07:00' },
    rights: { label: 'Copyright 2008 Apple Inc.' },
    title: { label: 'iTunes Store: Top Podcasts in Music' },
    icon: { label: 'http://itunes.apple.com/favicon.ico' },
    link: [
      {
        attributes: {
          rel: 'alternate',
          type: 'text/html',
          href: 'https://podcasts.apple.com/WebObjects/MZStore.woa/wa/viewTop?cc=us&id=179537&popId=3'
        }
      },
      {
        attributes: {
          rel: 'self',
          href: 'https://mzstoreservices-int.dslb.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json'
        }
      }
    ],
    id: {
      label:
        'https://mzstoreservices-int.dslb.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json'
    }
  }
}

export const formattedPodcastList = keysToCamel(podcastList.feed.entry)
export default podcastList
