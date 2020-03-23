import React, { Component } from 'react';
import axios from 'axios';

export default class BlogSingle extends Component {
  state = {
    actualItem: {
      id: 72,
      date: '2020-03-22T13:12:03',
      date_gmt: '2020-03-22T12:12:03',
      guid: {
        rendered: 'http://j-filipiak.pl/api/?p=72'
      },
      modified: '2020-03-22T13:12:10',
      modified_gmt: '2020-03-22T12:12:10',
      slug: 'czy-naprawde-potrzebujesz-system-cms',
      status: 'publish',
      type: 'post',
      link:
        'https://j-filipiak.pl/api/2020/03/22/czy-naprawde-potrzebujesz-system-cms/',
      title: {
        rendered: 'czekaj...'
      },
      content: {
        rendered: '',
        protected: false
      },
      excerpt: {
        rendered: '',
        protected: false
      },
      author: 1,
      featured_media: 0,
      comment_status: 'open',
      ping_status: 'open',
      sticky: false,
      template: '',
      format: 'standard',
      meta: [],
      categories: [1],
      tags: [],
      better_featured_image: null,
      acf: [],
      _links: {
        self: [
          {
            href: 'https://j-filipiak.pl/api/wp-json/wp/v2/posts/72'
          }
        ],
        collection: [
          {
            href: 'https://j-filipiak.pl/api/wp-json/wp/v2/posts'
          }
        ],
        about: [
          {
            href: 'https://j-filipiak.pl/api/wp-json/wp/v2/types/post'
          }
        ],
        author: [
          {
            embeddable: true,
            href: 'https://j-filipiak.pl/api/wp-json/wp/v2/users/1'
          }
        ],
        replies: [
          {
            embeddable: true,
            href: 'https://j-filipiak.pl/api/wp-json/wp/v2/comments?post=72'
          }
        ],
        'version-history': [
          {
            count: 1,
            href: 'https://j-filipiak.pl/api/wp-json/wp/v2/posts/72/revisions'
          }
        ],
        'predecessor-version': [
          {
            id: 73,
            href:
              'https://j-filipiak.pl/api/wp-json/wp/v2/posts/72/revisions/73'
          }
        ],
        'wp:attachment': [
          {
            href: 'https://j-filipiak.pl/api/wp-json/wp/v2/media?parent=72'
          }
        ],
        'wp:term': [
          {
            taxonomy: 'category',
            embeddable: true,
            href: 'https://j-filipiak.pl/api/wp-json/wp/v2/categories?post=72'
          },
          {
            taxonomy: 'post_tag',
            embeddable: true,
            href: 'https://j-filipiak.pl/api/wp-json/wp/v2/tags?post=72'
          }
        ],
        curies: [
          {
            name: 'wp',
            href: 'https://api.w.org/{rel}',
            templated: true
          }
        ]
      }
    },
    isReady: false
  };

  async componentDidMount() {
    const postsRes = await axios({
      method: 'GET',
      url: `https://www.j-filipiak.pl/api/wp-json/wp/v2/posts/${this.props.post.match.params.id}`
    });

    this.setState({
      actualItem: postsRes.data,
      isReady: true
    });
  }

  render() {
    const ready = this.state.isReady;

    return (
      <div className="single-post">
        {ready ? (
          <h1>{this.state.actualItem.title.rendered}</h1>
        ) : (
          <h1>Czekaj ...</h1>
        )}
        <div
          contentEditable="true"
          dangerouslySetInnerHTML={{
            __html: this.state.actualItem.content.rendered
          }}
        ></div>
      </div>
    );
  }
}
