// import { getRepository } from "typeorm";
// import { startOfHour, parseISO } from "date-fns";
// import Scheduling from "../models/Scheduling";

// interface Request {
//   prestador_servico_id: string;
//   data: string;
// }

// class SchedulingController {
//   public async store({
//     prestador_servico_id,
//     data,
//   }: Request): Promise<Scheduling> {
//     const dataPassada = startOfHour(parseISO(data));
//     const schedulesRespository = getRepository(Scheduling);
//     const findSchedulesSameDate = await schedulesRespository.findOne({
//       where: { data: dataPassada },
//     });
//     if (findSchedulesSameDate) {
//       throw new Error("Agendamento já cadastrado para este horário");
//     }
//     const schedule = schedulesRespository.create({
//       prestador_servico_id,
//       data: dataPassada,
//     });

//     await schedulesRespository.save(schedule);

//     return schedule;
//   }
// }

// export default SchedulingController;
