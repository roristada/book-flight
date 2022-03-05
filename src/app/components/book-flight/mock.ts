import { Flight } from "./flight"
export class Mock {
  public static mockFlight: Flight[] = [
    {
      fullName: "Tada Ardhan",
      from: "Thailand",
      to: "France",
      type: "One way",
      departure: new Date('05-05-2022'),
      arrival: new Date('05-07-2022'),
      adults: 2,
      children: 2,
      infants: 1
    }
  ]

}
