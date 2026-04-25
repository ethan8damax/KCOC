// App.jsx — routes, tweaks, and mounts
const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "welcomeImage": "sky"
}/*EDITMODE-END*/;

const HomePage = ({ tweaks }) => (
  <React.Fragment>
    <Hero />
    <WelcomeSection imageKey={tweaks.welcomeImage} />
    <ScriptureQuote
      text="Be still, and know that I am God."
      reference="Psalm 46:10"
    />
    <BeliefsSnippet />
    <CTABanner />
  </React.Fragment>
);

window.HomePage = HomePage;

const App = () => {
  const [route, setRoute] = React.useState(window.location.hash || '#/');
  const [tweaks, setTweak] = useTweaks(TWEAK_DEFAULTS);

  React.useEffect(() => {
    const onHash = () => {
      setRoute(window.location.hash || '#/');
      window.scrollTo({ top: 0, behavior: 'instant' });
    };
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  let page;
  if (route === '#/about' || route === '#/beliefs') page = <AboutPage />;
  else if (route === '#/visit') page = <VisitPage />;
  else page = <HomePage tweaks={tweaks} />;

  return (
    <React.Fragment>
      <Nav route={route} />
      <main data-screen-label={route.replace('#/', '') || 'home'}>
        {page}
      </main>
      <Footer />
      <TweaksPanel title="Tweaks">
        <TweakSection label="Welcome section" />
        <TweakSelect
          label="Image"
          value={tweaks.welcomeImage}
          options={[
            { value: 'sky',    label: 'Blue sky with white clouds' },
            { value: 'field',  label: 'Open field, golden hour' },
            { value: 'meadow', label: 'Mountain meadow' },
            { value: 'porch',  label: 'Sunlit porch' },
            { value: 'window', label: 'Soft morning window light' },
            { value: 'hands',  label: 'Open hands in light' },
            { value: 'coffee', label: 'Quiet coffee table' },
            { value: 'trees',  label: 'Light through trees' },
          ]}
          onChange={(v) => setTweak('welcomeImage', v)}
        />
      </TweaksPanel>
    </React.Fragment>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
