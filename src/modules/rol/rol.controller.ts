import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from "@nestjs/common";
import { RolService } from "@modules/rol/rol.service";
import { RolQueryDto } from "@modules/rol/dto/rol-query.dto";
import { CreateRolDto } from "@modules/rol/dto/create-rol.dto";
import { UpdateAgencyDto } from "@modules/agency/dto/update-agency.dto";

@Controller("rol")
export class RolController {
  constructor(private readonly _rolService: RolService) {}

  @Get()
  public async list(@Query() query: RolQueryDto) {
    return await this._rolService.list(query);
  }

  @Post()
  public async create(@Body() createRolDto: CreateRolDto) {
    return await this._rolService.create(createRolDto);
  }

  @Patch(":id")
  public async update(@Param("id") id: number, @Body() updateAgencyDto: UpdateAgencyDto) {
    return await this._rolService.update(id, updateAgencyDto);
  }

  @Delete(":id")
  public async delete(@Param("id") id: number) {
    return await this._rolService.delete(id);
  }
}
