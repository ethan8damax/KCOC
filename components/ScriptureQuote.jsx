// ScriptureQuote.jsx — full-bleed scripture pull-quote
const ScriptureQuote = ({ text, reference }) => (
  <section className="scripture-pull">
    <blockquote>"{text}"</blockquote>
    <cite>{reference}</cite>
  </section>
);

window.ScriptureQuote = ScriptureQuote;
