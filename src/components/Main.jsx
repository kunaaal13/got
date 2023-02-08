import Card from './Card'

function Main({ data }) {
  console.log(data)
  return (
    <div className='w-full flex items-center justify-center my-10 '>
      <div className='w-4/5 px-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'>
        {data.map((item) => (
          <Card
            key={item.id}
            url={item.imageUrl}
            firstName={item.firstName}
            lastName={item.lastName}
            title={item.title}
            family={item.family}
          />
        ))}
      </div>
    </div>
  )
}

export default Main
