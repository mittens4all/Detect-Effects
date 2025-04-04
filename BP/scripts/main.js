import { world, system } from "@minecraft/server";

const objAbsorption = world.scoreboard.getObjective("detect:absorption") ?? world.scoreboard.addObjective("detect:absorption");
const objBadOmen = world.scoreboard.getObjective("detect:bad_omen") ?? world.scoreboard.addObjective("detect:bad_omen");
const objBlindness = world.scoreboard.getObjective("detect:blindness") ?? world.scoreboard.addObjective("detect:blindness");
const objConduitPower = world.scoreboard.getObjective("detect:conduit_power") ?? world.scoreboard.addObjective("detect:conduit_power");
const objDarkness = world.scoreboard.getObjective("detect:darkness") ?? world.scoreboard.addObjective("detect:darkness");
const objFatalPoison = world.scoreboard.getObjective("detect:fatal_poison") ?? world.scoreboard.addObjective("detect:fatal_poison");
const objFireResistance = world.scoreboard.getObjective("detect:fire_resistance") ?? world.scoreboard.addObjective("detect:fire_resistance");
const objHaste = world.scoreboard.getObjective("detect:haste") ?? world.scoreboard.addObjective("detect:haste");
const objHealthBoost = world.scoreboard.getObjective("detect:health_boost") ?? world.scoreboard.addObjective("detect:health_boost");
const objHunger = world.scoreboard.getObjective("detect:hunger") ?? world.scoreboard.addObjective("detect:hunger");
const objInfested = world.scoreboard.getObjective("detect:infested") ?? world.scoreboard.addObjective("detect:infested");
const objInstantDamage = world.scoreboard.getObjective("detect:instant_damage") ?? world.scoreboard.addObjective("detect:instant_damage");
const objInstantHealth = world.scoreboard.getObjective("detect:instant_health") ?? world.scoreboard.addObjective("detect:instant_health");
const objInvisibility = world.scoreboard.getObjective("detect:invisibility") ?? world.scoreboard.addObjective("detect:invisibility");
const objJumpBoost = world.scoreboard.getObjective("detect:jump_boost") ?? world.scoreboard.addObjective("detect:jump_boost");
const objLevitation = world.scoreboard.getObjective("detect:levitation") ?? world.scoreboard.addObjective("detect:levitation");
const objMiningFatigue = world.scoreboard.getObjective("detect:mining_fatigue") ?? world.scoreboard.addObjective("detect:mining_fatigue");
const objNausea = world.scoreboard.getObjective("detect:nausea") ?? world.scoreboard.addObjective("detect:nausea");
const objNightVision = world.scoreboard.getObjective("detect:night_vision") ?? world.scoreboard.addObjective("detect:night_vision");
const objOozing = world.scoreboard.getObjective("detect:oozing") ?? world.scoreboard.addObjective("detect:oozing");
const objPoison = world.scoreboard.getObjective("detect:poison") ?? world.scoreboard.addObjective("detect:poison");
const objRaidOmen = world.scoreboard.getObjective("detect:raid_omen") ?? world.scoreboard.addObjective("detect:raid_omen");
const objRegeneration = world.scoreboard.getObjective("detect:regeneration") ?? world.scoreboard.addObjective("detect:regeneration");
const objResistance = world.scoreboard.getObjective("detect:resistance") ?? world.scoreboard.addObjective("detect:resistance");
const objSaturation = world.scoreboard.getObjective("detect:saturation") ?? world.scoreboard.addObjective("detect:saturation");
const objSlowFalling = world.scoreboard.getObjective("detect:slow_falling") ?? world.scoreboard.addObjective("detect:slow_falling");
const objSlowness = world.scoreboard.getObjective("detect:slowness") ?? world.scoreboard.addObjective("detect:slowness");
const objSpeed = world.scoreboard.getObjective("detect:speed") ?? world.scoreboard.addObjective("detect:speed");
const objStrength = world.scoreboard.getObjective("detect:strength") ?? world.scoreboard.addObjective("detect:strength");
const objTrialOmen = world.scoreboard.getObjective("detect:trial_omen") ?? world.scoreboard.addObjective("detect:trial_omen");
const objVillageHero = world.scoreboard.getObjective("detect:village_hero") ?? world.scoreboard.addObjective("detect:village_hero");
const objWaterBreathing = world.scoreboard.getObjective("detect:water_breathing") ?? world.scoreboard.addObjective("detect:water_breathing");
const objWeakness = world.scoreboard.getObjective("detect:weakness") ?? world.scoreboard.addObjective("detect:weakness");
const objWeaving = world.scoreboard.getObjective("detect:weaving") ?? world.scoreboard.addObjective("detect:weaving");
const objWindCharged = world.scoreboard.getObjective("detect:wind_charged") ?? world.scoreboard.addObjective("detect:wind_charged");
const objWither = world.scoreboard.getObjective("detect:wither") ?? world.scoreboard.addObjective("detect:wither");

function detectEffects() {
    const allPlayers = world.getPlayers();
    for (const player of allPlayers) {
        objAbsorption.setScore(player, player.getEffect('absorption') ? 1 : 0);
        objBadOmen.setScore(player, player.getEffect('bad_omen') ? 1 : 0);
        objBlindness.setScore(player, player.getEffect('blindness') ? 1 : 0);
        objConduitPower.setScore(player, player.getEffect('conduit_power') ? 1 : 0);
        objDarkness.setScore(player, player.getEffect('darkness') ? 1 : 0);
        objFatalPoison.setScore(player, player.getEffect('fatal_poison') ? 1 : 0);
        objFireResistance.setScore(player, player.getEffect('fire_resistance') ? 1 : 0);
        objHaste.setScore(player, player.getEffect('haste') ? 1 : 0);
        objHealthBoost.setScore(player, player.getEffect('health_boost') ? 1 : 0);
        objHunger.setScore(player, player.getEffect('hunger') ? 1 : 0);
        objInfested.setScore(player, player.getEffect('infested') ? 1 : 0);
        objInstantDamage.setScore(player, player.getEffect('instant_damage') ? 1 : 0);
        objInstantHealth.setScore(player, player.getEffect('instant_health') ? 1 : 0);
        objInvisibility.setScore(player, player.getEffect('invisibility') ? 1 : 0);
        objJumpBoost.setScore(player, player.getEffect('jump_boost') ? 1 : 0);
        objLevitation.setScore(player, player.getEffect('levitation') ? 1 : 0);
        objMiningFatigue.setScore(player, player.getEffect('mining_fatigue') ? 1 : 0);
        objNausea.setScore(player, player.getEffect('nausea') ? 1 : 0);
        objNightVision.setScore(player, player.getEffect('night_vision') ? 1 : 0);
        objOozing.setScore(player, player.getEffect('oozing') ? 1 : 0);
        objPoison.setScore(player, player.getEffect('poison') ? 1 : 0);
        objRaidOmen.setScore(player, player.getEffect('raid_omen') ? 1 : 0);
        objRegeneration.setScore(player, player.getEffect('regeneration') ? 1 : 0);
        objResistance.setScore(player, player.getEffect('resistance') ? 1 : 0);
        objSaturation.setScore(player, player.getEffect('saturation') ? 1 : 0);
        objSlowFalling.setScore(player, player.getEffect('slow_falling') ? 1 : 0);
        objSlowness.setScore(player, player.getEffect('slowness') ? 1 : 0);
        objSpeed.setScore(player, player.getEffect('speed') ? 1 : 0);
        objStrength.setScore(player, player.getEffect('strength') ? 1 : 0);
        objTrialOmen.setScore(player, player.getEffect('trial_omen') ? 1 : 0);
        objVillageHero.setScore(player, player.getEffect('village_hero') ? 1 : 0);
        objWaterBreathing.setScore(player, player.getEffect('water_breathing') ? 1 : 0);
        objWeakness.setScore(player, player.getEffect('weakness') ? 1 : 0);
        objWeaving.setScore(player, player.getEffect('weaving') ? 1 : 0);
        objWindCharged.setScore(player, player.getEffect('wind_charged') ? 1 : 0);
        objWither.setScore(player, player.getEffect('wither') ? 1 : 0);
    }
};
system.runInterval(detectEffects, 1);