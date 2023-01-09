import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateXxxDto } from './dto/create-xxx.dto';
import { UpdateXxxDto } from './dto/update-xxx.dto';
import { Xxx } from './entities/xxx.entity';

@Injectable()
export class XxxService {
  constructor(@InjectRepository(Xxx) private xxxRepository: Repository<Xxx>) {}

  async create(createXxxDto: CreateXxxDto) {
    createXxxDto.createTime = createXxxDto.updateTime = new Date();
    createXxxDto.isDelete = false;
    return await this.xxxRepository.save(createXxxDto);
  }

  async findAll() {
    // 查询全部,可以直接用find 函数, 但是要过滤字段, 所以使用 findAndCount
    // return await this.xxxRepository.find();

    const result = await this.xxxRepository.findAndCount({
      select: ['id', 'content', 'title'],
    });

    return {
      list: result[0],
      total: result[1],
    };
  }

  async findOne(id: number) {
    const rst = await this.xxxRepository.findAndCount({
      where: { id },
      select: ['id', 'content', 'title'],
    });

    return rst[0];
    // return await this.xxxRepository.findBy({
    //   id,
    // });
  }

  async update(id: number, updateXxxDto: UpdateXxxDto) {
    return await this.xxxRepository.update(id, updateXxxDto);
  }

  async remove(id: number) {
    return `This action removes a #${id} xxx`;
  }
}
