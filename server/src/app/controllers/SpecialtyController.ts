// import { getRepository } from "typeorm";
// import { Specialty } from "../models/Specialty";

// interface Request {
//   name: string;
// }

// class SpecialtyController {
//   public async store({ name }: Request): Promise<Specialty> {
//     const SpecialtyRepository = getRepository(Specialty);

//     const specialty = SpecialtyRepository.create({
//       name,
//     });

//     await SpecialtyRepository.save(specialty);

//     return specialty;
//   }
// }

// export default SpecialtyController;
