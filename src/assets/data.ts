export const data = {
  projects: [
    {
      number: "W08022",
      type: "Industrial Projects",
      location: {
        street: "Poldervlietweg",
        zipCode: "2030",
        city: "Antwerpen"
      },
      responsible: {
        firstName: "Herman",
        lastName: "Van Beeck"
      },
      events: [
        {
          color: "green",
          startDate: new Date(2020, 10, 12),
          endDate: new Date(2020, 10, 15),
          name: "450 KOM D61/2",
          workers: [
            {
              firstName: "Jozef",
              lastName: "Nuytemans",
              startDate: new Date(2020, 10, 12, 7, 0)
            },
            {
              firstName: "Hans",
              lastName: "Van Bouwel",
              startDate: new Date(2020, 10, 13, 7, 0)
            },
            {
              firstName: "Tom",
              lastName: "Verschuer",
              startDate: new Date(2020, 10, 14, 7, 0)
            },
            {
              firstName: "Tom",
              lastName: "Verscheur",
              startDate: new Date(2020, 10, 15, 7, 0)
            }
          ]
        },
        {
          color: "yellow",
          startDate: new Date(2020, 10, 16),
          endDate: new Date(2020, 10, 18),
          name: "1335 1CBN748 4x2",
          license: "1017 BULKOPL 04",
          workers: [
            {
              firstName: "Hans",
              lastName: "Van Bouwel",
              startDate: new Date(2020, 10, 17, 7, 0)
            }
          ]
        },
        {
          color: "blue",
          startDate: new Date(2020, 10, 15),
          endDate: new Date(2020, 10, 18),
          name: "5327 CAT 980 M5"
        },
        {
          color: "green",
          startDate: new Date(2020, 10, 15),
          endDate: new Date(2020, 10, 18),
          name: "491 KOM D155 1",
          workers: [
            {
              firstName: "Sam",
              lastName: "Verhulst",
              startDate: new Date(2020, 10, 15, 8, 0)
            }
          ]
        },
        {
          color: "gray",
          startDate: new Date(2020, 10, 15),
          endDate: new Date(2020, 10, 18),
          name: "749 HAMM HD12VV4",
          workers: [
            {
              firstName: "Francois",
              lastName: "Bruno",
              startDate: new Date(2020, 10, 15, 8, 0)
            }
          ]
        },
        {
          color: "white",
          workerOnly: true,
          startDate: new Date(2020, 10, 15),
          endDate: new Date(2020, 10, 15),
          workers: [
            {
              firstName: "Tim",
              lastName: "Marijnissen",
              startDate: new Date(2020, 10, 15, 8, 0)
            }
          ]
        }
      ]
    }
  ]
};
