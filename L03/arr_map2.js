const KvArray = [
    {key: 1, value :10},
    {key: 2, value :20}
]

const refommatted = KvArray.map(
    ({key, value}) => ({[key]: value})
)

