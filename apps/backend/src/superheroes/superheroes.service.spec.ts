import { SuperheroesService } from './superheroes.service';

describe('SuperheroesService', () => {
  let service: SuperheroesService;

  beforeEach(() => {
    service = new SuperheroesService();
  });

  it('should add and retrieve superheroes sorted by humilityScore', () => {
    service.create({
      name: 'Iron Man',
      superpower: 'Tech Genius',
      humilityScore: 6,
    });
    service.create({
      name: 'Captain America',
      superpower: 'Super Soldier',
      humilityScore: 10,
    });

    const superheroes = service.findAll();
    expect(superheroes[0].name).toBe('Captain America'); // Highest humility first
  });
});
