interface Animal {
  name: string,
  img: string,
  description: string
}

interface Data {
  dogs: Animal[],
  cats: Animal[],
  horses: Animal[],
  sheeps: Animal[]
}

const datas: Data = {
  dogs: [
    {
      name: 'Max',
      img: 'https://images.unsplash.com/photo-1561037404-61cd46aa615b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
      description: 'Cachorro com 1 ano'
    },
    {
      name: 'Max',
      img: 'https://images.unsplash.com/photo-1561037404-61cd46aa615b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
      description: 'Cachorro com 1 ano'
    },
    {
      name: 'Max',
      img: 'https://images.unsplash.com/photo-1561037404-61cd46aa615b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
      description: 'Cachorro com 1 ano'
    },
    {
      name: 'Max',
      img: 'https://images.unsplash.com/photo-1561037404-61cd46aa615b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
      description: 'Cachorro com 1 ano'
    }
  ],
  cats: [
    {
      name: 'Bob',
      img: 'https://images.unsplash.com/photo-1494256997604-768d1f608cac?ixlib=rb-1.2.1&auto=format&fit=crop&w=1401&q=80',
      description: 'Gato carinhoso'
    },
    {
      name: 'Bob',
      img: 'https://images.unsplash.com/photo-1494256997604-768d1f608cac?ixlib=rb-1.2.1&auto=format&fit=crop&w=1401&q=80',
      description: 'Gato carinhoso'
    },
    {
      name: 'Bob',
      img: 'https://images.unsplash.com/photo-1494256997604-768d1f608cac?ixlib=rb-1.2.1&auto=format&fit=crop&w=1401&q=80',
      description: 'Gato carinhoso'
    },
    {
      name: 'Bob',
      img: 'https://images.unsplash.com/photo-1494256997604-768d1f608cac?ixlib=rb-1.2.1&auto=format&fit=crop&w=1401&q=80',
      description: 'Gato carinhoso'
    }
  ],
  horses: [
    {
      name: 'pegasus',
      img: 'https://images.unsplash.com/flagged/photo-1557296126-ae91316e5746?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
      description: 'Cavalo de corrida'
    },
    {
      name: 'pegasus',
      img: 'https://images.unsplash.com/flagged/photo-1557296126-ae91316e5746?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
      description: 'Cavalo de corrida'
    },
    {
      name: 'pegasus',
      img: 'https://images.unsplash.com/flagged/photo-1557296126-ae91316e5746?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
      description: 'Cavalo de corrida'
    },
    {
      name: 'pegasus',
      img: 'https://images.unsplash.com/flagged/photo-1557296126-ae91316e5746?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
      description: 'Cavalo de corrida'
    }
  ],
  sheeps: [
    {
      name: 'Dolly',
      img: 'https://images.unsplash.com/photo-1484557985045-edf25e08da73?ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80',
      description: 'Ovelha mansa'
    },
    {
      name: 'Dolly',
      img: 'https://images.unsplash.com/photo-1484557985045-edf25e08da73?ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80',
      description: 'Ovelha mansa'
    },
    {
      name: 'Dolly',
      img: 'https://images.unsplash.com/photo-1484557985045-edf25e08da73?ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80',
      description: 'Ovelha mansa'
    },
    {
      name: 'Dolly',
      img: 'https://images.unsplash.com/photo-1484557985045-edf25e08da73?ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80',
      description: 'Ovelha mansa'
    }
  ]
}

export default datas
