# excersice_mint

## step to start excersice

- Create .env file in root project

```
  USERNAME=root
  PASSWORD=root
  DATABASE=excersice
```

- input yarn install in terminal
- how to start project input yarn start

## Path for call API

// Get all member

- GET/ localhost:5000/api/member/get_all_member_group

// Get member in group

- GET/ localhost:5000/api/member/:group_id/get_member_group

```
example link
localhost:5000/api/member/5fcb34e7ffac10063d4adad4/get_member_group

example payload
{
    "group_member": [
        {
            "group_name": "G3",
            "members": [
                {
                    "member_name": "G3-1",
                    "score": 65
                }
            ]
        }
    ],
    "average_score": 65,
    "max_score": 65,
    "min_score": 65
}
```

// For get group id

- GET/ localhost:5000/api/group

```
example payload
[
        { group_id: '5fcb34e1ffac10063d4adad2', group_name: 'G1' },
        { group_id: '5fcb34e4ffac10063d4adad3', group_name: 'G2' },
        { group_id: '5fcb34e7ffac10063d4adad4', group_name: 'G3' },
        { group_id: '5fcb34e9ffac10063d4adad5', group_name: 'G4' }
      ]
```
