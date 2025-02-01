import { Body, Controller, Get, Post } from '@nestjs/common';
import { SuperheroesService } from './superheroes.service';
import { CreateSuperheroDto } from './dto/create-superhero.dto';

@Controller('superheroes')
export class SuperheroesController {
  constructor(private readonly superheroesService: SuperheroesService) {}

  @Post()
  create(@Body() createSuperheroDto: CreateSuperheroDto) {
    this.superheroesService.create(createSuperheroDto);
    return { message: 'Superhero added successfully' };
  }

  @Get()
  findAll() {
    return this.superheroesService.findAll();
  }
}
