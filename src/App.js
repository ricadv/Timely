import Header from './components/Header'

function App() {
  const name =  'Rica'
  const x = true

  return (
    <div className="Container">
      <Header />
      {/* <h2>{x ? 'Yes' : 'No' } {name}</h2> */}
    </div>
  );
}

export default App;
