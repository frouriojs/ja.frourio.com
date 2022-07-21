import MarkdownIt from 'markdown-it';
import Twemoji from 'twemoji';

export const Markdown = MarkdownIt({ linkify: true, html: true });

export const render = (markdown: string): string => {
  const html = Markdown.render(markdown);
  return Twemoji.parse(html);
};

export default { Markdown, render };
