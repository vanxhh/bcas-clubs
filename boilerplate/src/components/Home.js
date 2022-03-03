const Home = () => {
	return (
		<main className='main'>
      <section className='landing--text'>
        <div className='landing--text__clubs'>
          <h2 className='landing--text__header'>Clubs</h2>
          <p className='landing--text__para'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ac ut consequat semper viverra. Posuere urna nec tincidunt praesent semper feugiat nibh. Eget gravida cum sociis natoque penatibus. Est ultricies integer quis auctor elit sed. Vitae semper quis lectus nulla at volutpat diam ut. Blandit massa enim nec dui nunc mattis enim ut tellus.</p>
        </div>
        <div className='landing--text__events'>
          <h2 className='landing--text__header'>Events</h2>
          <p className='landing--text__para'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ac ut consequat semper viverra. Posuere urna nec tincidunt praesent semper feugiat nibh. Eget gravida cum sociis natoque penatibus. Est ultricies integer quis auctor elit sed. Vitae semper quis lectus nulla at volutpat diam ut. Blandit massa enim nec dui nunc mattis enim ut tellus.</p>
        </div>
      </section>

      <section className='clubs'>
        <div>
          <legend className='legend'>Clubs</legend>
          <a href='/clubs'><div className='underline'>See All</div></a>
        </div>
        <div className='grid'>
          {
            [1, 2, 3, 4, 5].map((_, index) => (
              <div key={index} className='card pointer'>
                <div className='card--img'>
                  <img src='https://image.freepik.com/free-vector/yellow-orange-gradient-abstract-background_53876-62624.jpg?w=480' alt='club' />
                </div>
                <div className='card--text'>
                  <h3>Dummy Club</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ac ut consequat semper viverra. Posuere urna nec tincidunt praesent semper feugiat nibh. Eget gravida cum sociis natoque penatibus.</p>
                </div>
              </div>
            ))
          }
        </div>
      </section>

      <section className='clubs'>
        <div>
          <legend className='legend'>Events</legend>
          <a href='/clubs'><div className='underline'>See All</div></a>
        </div>
        <div className='grid'>
          {
            [1, 2, 3, 4, 5].map((_, index) => (
              <div key={index} className='card pointer'>
                <div className='card--text'>
                  <h3>Dummy Event</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ac ut consequat semper viverra. Posuere urna nec tincidunt praesent semper feugiat nibh. Eget gravida cum sociis natoque penatibus.</p>
                </div>
              </div>
            ))
          }
        </div>
      </section>
    </main>
	)
}

export default Home;
