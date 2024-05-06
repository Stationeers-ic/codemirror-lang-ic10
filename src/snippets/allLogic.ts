export const allLogic: {
	name: string
	description: string
}[] = [
	{
		name: "Mode",
		description: "Integer for mode state, different devices will have different mode states available to them",
	},
	{
		name: "ReferenceId",
		description: "logic.ReferenceId",
	},
	{
		name: "Open",
		description: "1 if device is open, otherwise 0",
	},
	{
		name: "Lock",
		description:
			"1 if device is locked, otherwise 0, can be set in most devices and prevents the user from access the values",
	},
	{
		name: "Setting",
		description: "A variable setting that can be read or written, depending on the device",
	},
	{
		name: "On",
		description: "The current state of the device, 0 for off, 1 for on",
	},
	{
		name: "Idle",
		description: "Returns 1 if the device is currently idle, otherwise 0",
	},
	{
		name: "PrefabHash",
		description: "The hash of the structure",
	},
	{
		name: "Power",
		description:
			"Can be read to return if the device is correctly powered or not, set via the power system, return 1 if powered and 0 if not",
	},
	{
		name: "Error",
		description: "1 if device is in error state, otherwise 0",
	},
	{
		name: "Activate",
		description: "1 if device is activated (usually means running), otherwise 0",
	},
	{
		name: "RequiredPower",
		description: "Idle operating power quantity, does not necessarily include extra demand power",
	},
	{
		name: "Time",
		description: "Time",
	},
	{
		name: "Bpm",
		description: "Bpm",
	},
	{
		name: "Volume",
		description: "Returns the device atmosphere volume",
	},
	{
		name: "Pressure",
		description: "The current pressure reading of the device",
	},
	{
		name: "Temperature",
		description: "The current temperature reading of the device",
	},
	{
		name: "RatioOxygen",
		description: "The ratio of oxygen in device atmosphere",
	},
	{
		name: "RatioCarbonDioxide",
		description: "The ratio of {GAS:CarbonDioxide} in device atmosphere",
	},
	{
		name: "RatioNitrogen",
		description: "The ratio of nitrogen in device atmosphere",
	},
	{
		name: "RatioPollutant",
		description: "The ratio of pollutant in device atmosphere",
	},
	{
		name: "RatioVolatiles",
		description: "The ratio of volatiles in device atmosphere",
	},
	{
		name: "RatioWater",
		description: "The ratio of water in device atmosphere",
	},
	{
		name: "Maximum",
		description: "Maximum setting of the device",
	},
	{
		name: "Ratio",
		description: "Context specific value depending on device, 0 to 1 based ratio",
	},
	{
		name: "TotalMoles",
		description: "Returns the total moles of the device",
	},
	{
		name: "RatioNitrousOxide",
		description: "The ratio of {GAS:NitrousOxide} in device atmosphere",
	},
	{
		name: "Combustion",
		description: "The assess atmosphere is on fire. Returns 1 if atmosphere is on fire, 0 if not.",
	},
	{
		name: "PressureInput",
		description: "The current pressure reading of the device's Input Network",
	},
	{
		name: "TemperatureInput",
		description: "The current temperature reading of the device's Input Network",
	},
	{
		name: "RatioOxygenInput",
		description: "The ratio of oxygen in device's input network",
	},
	{
		name: "RatioCarbonDioxideInput",
		description: "The ratio of {GAS:CarbonDioxide} in device's input network",
	},
	{
		name: "RatioNitrogenInput",
		description: "The ratio of nitrogen in device's input network",
	},
	{
		name: "RatioPollutantInput",
		description: "The ratio of pollutant in device's input network",
	},
	{
		name: "RatioVolatilesInput",
		description: "The ratio of volatiles in device's input network",
	},
	{
		name: "RatioWaterInput",
		description: "The ratio of water in device's input network",
	},
	{
		name: "RatioNitrousOxideInput",
		description: "The ratio of {GAS:NitrousOxide} in device's input network",
	},
	{
		name: "TotalMolesInput",
		description: "Returns the total moles of the device's Input Network",
	},
	{
		name: "PressureOutput",
		description: "The current pressure reading of the device's Output Network",
	},
	{
		name: "TemperatureOutput",
		description: "The current temperature reading of the device's Output Network",
	},
	{
		name: "RatioOxygenOutput",
		description: "The ratio of oxygen in device's Output network",
	},
	{
		name: "RatioCarbonDioxideOutput",
		description: "The ratio of {GAS:CarbonDioxide} in device's Output network",
	},
	{
		name: "RatioNitrogenOutput",
		description: "The ratio of nitrogen in device's Output network",
	},
	{
		name: "RatioPollutantOutput",
		description: "The ratio of pollutant in device's Output network",
	},
	{
		name: "RatioVolatilesOutput",
		description: "The ratio of volatiles in device's Output network",
	},
	{
		name: "RatioWaterOutput",
		description: "The ratio of water in device's Output network",
	},
	{
		name: "RatioNitrousOxideOutput",
		description: "The ratio of {GAS:NitrousOxide} in device's Output network",
	},
	{
		name: "TotalMolesOutput",
		description: "Returns the total moles of the device's Output Network",
	},
	{
		name: "CombustionInput",
		description: "The assess atmosphere is on fire. Returns 1 if device's input network is on fire, 0 if not.",
	},
	{
		name: "CombustionOutput",
		description: "The assess atmosphere is on fire. Returns 1 if device's Output network is on fire, 0 if not.",
	},
	{
		name: "SoundAlert",
		description: "Plays a sound alert on the devices speaker",
	},
	{
		name: "Flush",
		description: "Set to 1 to activate the flush function on the device",
	},
	{
		name: "PressureExternal",
		description: "Setting for external pressure safety, in KPa",
	},
	{
		name: "PressureSetting",
		description:
			"The current setting for the internal pressure of the object (e.g. the Hardsuit Air release), in KPa",
	},
	{
		name: "TemperatureSetting",
		description: "The current setting for the internal temperature of the object (e.g. the Hardsuit A/C)",
	},
	{
		name: "TemperatureExternal",
		description: "The temperature of the outside of the device, usually the world atmosphere surrounding it",
	},
	{
		name: "Filtration",
		description:
			"The current state of the filtration system, for example Filtration = 1 for a Hardsuit sets filtration to On",
	},
	{
		name: "AirRelease",
		description:
			"The current state of the air release system, for example AirRelease = 1 for a Hardsuit sets Air Release to On",
	},
	{
		name: "PositionX",
		description: "The current position in X dimension in world coordinates",
	},
	{
		name: "PositionY",
		description: "The current position in Y dimension in world coordinates",
	},
	{
		name: "PositionZ",
		description: "The current position in Z dimension in world coordinates",
	},
	{
		name: "VelocityMagnitude",
		description: "The current magnitude of the velocity vector",
	},
	{
		name: "VelocityRelativeX",
		description: "The current velocity X relative to the forward vector of this",
	},
	{
		name: "VelocityRelativeY",
		description: "The current velocity Y relative to the forward vector of this",
	},
	{
		name: "VelocityRelativeZ",
		description: "The current velocity Z relative to the forward vector of this",
	},
	{
		name: "ForwardX",
		description: "logic.ForwardX",
	},
	{
		name: "ForwardY",
		description: "logic.ForwardY",
	},
	{
		name: "ForwardZ",
		description: "logic.ForwardZ",
	},
	{
		name: "Orientation",
		description: "logic.Orientation",
	},
	{
		name: "VelocityX",
		description: "logic.VelocityX",
	},
	{
		name: "VelocityY",
		description: "logic.VelocityY",
	},
	{
		name: "VelocityZ",
		description: "logic.VelocityZ",
	},
	{
		name: "EntityState",
		description: "logic.EntityState",
	},
	{
		name: "LineNumber",
		description:
			"The line number of current execution for an integrated circuit running on this device. While this number can be written, use with caution",
	},
	{
		name: "Vertical",
		description: "Vertical setting of the device",
	},
	{
		name: "ContactTypeId",
		description: "The type id of the contact.",
	},
	{
		name: "TargetX",
		description: "The target position in X dimension in world coordinates",
	},
	{
		name: "TargetY",
		description: "The target position in Y dimension in world coordinates",
	},
	{
		name: "TargetZ",
		description: "The target position in Z dimension in world coordinates",
	},
	{
		name: "MineablesInVicinity",
		description: "logic.MineablesInVicinity",
	},
	{
		name: "MineablesInQueue",
		description: "logic.MineablesInQueue",
	},
	{
		name: "PressureInternal",
		description: "Setting for internal pressure safety, in KPa",
	},
	{
		name: "Quantity",
		description: "Total quantity on the device",
	},
	{
		name: "ClearMemory",
		description:
			"When set to 1, clears the counter memory (e.g. ExportCount). Will set itself back to 0 when actioned",
	},
	{
		name: "ExportCount",
		description: "How many items exported since last ClearMemory",
	},
	{
		name: "ImportCount",
		description: "How many items imported since last ClearMemory",
	},
	{
		name: "Reagents",
		description: "Total number of reagents recorded by the device",
	},
	{
		name: "RecipeHash",
		description: "Current hash of the recipe the device is set to produce",
	},
	{
		name: "SettingInput",
		description: "logic.SettingInput",
	},
	{
		name: "SettingOutput",
		description: "logic.SettingOutput",
	},
	{
		name: "CompletionRatio",
		description: "How complete the current production is for this device, between 0 and 1",
	},
	{
		name: "PressureOutput2",
		description: "The current pressure reading of the device's Output2 Network",
	},
	{
		name: "TemperatureOutput2",
		description: "The current temperature reading of the device's Output2 Network",
	},
	{
		name: "RatioOxygenOutput2",
		description: "The ratio of oxygen in device's Output2 network",
	},
	{
		name: "RatioCarbonDioxideOutput2",
		description: "The ratio of {GAS:CarbonDioxide} in device's Output2 network",
	},
	{
		name: "RatioNitrogenOutput2",
		description: "The ratio of nitrogen in device's Output2 network",
	},
	{
		name: "RatioPollutantOutput2",
		description: "The ratio of pollutant in device's Output2 network",
	},
	{
		name: "RatioVolatilesOutput2",
		description: "The ratio of volatiles in device's Output2 network",
	},
	{
		name: "RatioWaterOutput2",
		description: "The ratio of water in device's Output2 network",
	},
	{
		name: "RatioNitrousOxideOutput2",
		description: "The ratio of {GAS:NitrousOxide} in device's Output2 network",
	},
	{
		name: "TotalMolesOutput2",
		description: "Returns the total moles of the device's Output2 Network",
	},
	{
		name: "CombustionOutput2",
		description: "The assess atmosphere is on fire. Returns 1 if device's Output2 network is on fire, 0 if not.",
	},
	{
		name: "OperationalTemperatureEfficiency",
		description: "How the input pipe's temperature effects the machines efficiency",
	},
	{
		name: "TemperatureDifferentialEfficiency",
		description:
			"How the difference between the input pipe and waste pipe temperatures effect the machines efficiency",
	},
	{
		name: "PressureEfficiency",
		description: "How the pressure of the input pipe and waste pipe effect the machines efficiency",
	},
	{
		name: "Charge",
		description: "The current charge the device has",
	},
	{
		name: "PowerPotential",
		description: "How much energy the device or network potentially provides",
	},
	{
		name: "PowerActual",
		description: "How much energy the device or network is actually using",
	},
	{
		name: "Color",
		description:
			'\n        Whether driven by concerns for clarity, safety or simple aesthetics, <a data-href="Stationeers" >Stationeers</a> have access to a small rainbow of colors for their constructions. These are the color setting for devices, represented as an integer.\n\n0: Blue\n1: Grey\n2: Green\n3: Orange\n4: Red\n5: Yellow\n6: White\n7: Black\n8: Brown\n9: Khaki\n10: Pink\n11: Purple\n\n        It is an unwavering universal law that anything higher than 11 will be purple. The <a data-href="ODA" >ODA</a> is powerless to change this. Similarly, anything lower than 0 will be Blue.\n      ',
	},
	{
		name: "PowerRequired",
		description: "Power requested from the device and/or network",
	},
	{
		name: "RatioLiquidNitrogen",
		description: "The ratio of {GAS:LiquidNitrogen} in device atmosphere",
	},
	{
		name: "VolumeOfLiquid",
		description: "The total volume of all liquids in Liters in the atmosphere",
	},
	{
		name: "RatioLiquidOxygen",
		description: "The ratio of {GAS:LiquidOxygen} in device's Atmosphere",
	},
	{
		name: "RatioLiquidVolatiles",
		description: "The ratio of {GAS:LiquidVolatiles} in device's Atmosphere",
	},
	{
		name: "RatioSteam",
		description: "The ratio of {GAS:Steam} in device's Atmosphere",
	},
	{
		name: "RatioLiquidCarbonDioxide",
		description: "The ratio of {GAS:LiquidCarbonDioxide} in device's Atmosphere",
	},
	{
		name: "RatioLiquidPollutant",
		description: "The ratio of {GAS:LiquidPollutant} in device's Atmosphere",
	},
	{
		name: "RatioLiquidNitrousOxide",
		description: "The ratio of {GAS:LiquidNitrousOxide} in device's Atmosphere",
	},
	{
		name: "CombustionLimiter",
		description:
			"Retards the rate of combustion inside the machine (range: 0-100), with 0 being the slowest rate of combustion and 100 being the fastest",
	},
	{
		name: "Throttle",
		description: "Increases the rate at which the machine works (range: 0-100)",
	},
	{
		name: "Rpm",
		description: "The number of revolutions per minute that the device's spinning mechanism is doing",
	},
	{
		name: "Stress",
		description:
			"Machines get stressed when working hard. When Stress reaches 100 the machine will automatically shut down",
	},
	{
		name: "Horizontal",
		description: "Horizontal setting of the device",
	},
	{
		name: "SolarAngle",
		description: "Solar angle of the device",
	},
	{
		name: "SolarIrradiance",
		description: "logic.SolarIrradiance",
	},
	{
		name: "ElevatorSpeed",
		description: "Current speed of the elevator",
	},
	{
		name: "ElevatorLevel",
		description: "Level the elevator is currently at",
	},
	{
		name: "PowerGeneration",
		description: "Returns how much power is being generated",
	},
	{
		name: "PassedMoles",
		description: "logic.PassedMoles",
	},
	{
		name: "HorizontalRatio",
		description: "Radio of horizontal setting for device",
	},
	{
		name: "VerticalRatio",
		description: "Radio of vertical setting for device",
	},
	{
		name: "CelestialHash",
		description: "logic.CelestialHash",
	},
	{
		name: "AlignmentError",
		description: "logic.AlignmentError",
	},
	{
		name: "DistanceAu",
		description: "logic.DistanceAu",
	},
	{
		name: "OrbitPeriod",
		description: "logic.OrbitPeriod",
	},
	{
		name: "Inclination",
		description: "logic.Inclination",
	},
	{
		name: "Eccentricity",
		description: "logic.Eccentricity",
	},
	{
		name: "SemiMajorAxis",
		description: "logic.SemiMajorAxis",
	},
	{
		name: "DistanceKm",
		description: "logic.DistanceKm",
	},
	{
		name: "CelestialParentHash",
		description: "logic.CelestialParentHash",
	},
	{
		name: "TrueAnomaly",
		description: "logic.TrueAnomaly",
	},
	{
		name: "Plant",
		description: "Performs the planting action for any plant based machinery",
	},
	{
		name: "Harvest",
		description: "Performs the harvesting action for any plant based machinery",
	},
	{
		name: "SignalStrength",
		description: "Returns the degree offset of the strongest contact",
	},
	{
		name: "SignalID",
		description: "Returns the contact ID of the strongest signal from this Satellite",
	},
	{
		name: "InterrogationProgress",
		description: "Progress of this sattellite dish's interrogation of its current target, as a ratio from 0-1",
	},
	{
		name: "TargetPadIndex",
		description:
			"The index of the trader landing pad on this devices data network that it will try to call a trader in to land",
	},
	{
		name: "SizeX",
		description: "Size on the X (right) axis of the object in largeGrids (a largeGrid is 2meters)",
	},
	{
		name: "SizeZ",
		description: "Size on the Z(Forward) axis of the object in largeGrids (a largeGrid is 2meters)",
	},
	{
		name: "MinimumWattsToContact",
		description: "logic.MinimumWattsToContact",
	},
	{
		name: "WattsReachingContact",
		description:
			"The amount of watts actually hitting the contact. This is effected by the power of the dish and how far off-axis the dish is from the contact vector",
	},
	{
		name: "ForceWrite",
		description: "Forces Logic Writer devices to rewrite value",
	},
	{
		name: "PressureInput2",
		description: "The current pressure reading of the device's Input2 Network",
	},
	{
		name: "TemperatureInput2",
		description: "The current temperature reading of the device's Input2 Network",
	},
	{
		name: "RatioOxygenInput2",
		description: "The ratio of oxygen in device's Input2 network",
	},
	{
		name: "RatioCarbonDioxideInput2",
		description: "The ratio of {GAS:CarbonDioxide} in device's Input2 network",
	},
	{
		name: "RatioNitrogenInput2",
		description: "The ratio of nitrogen in device's Input2 network",
	},
	{
		name: "RatioPollutantInput2",
		description: "The ratio of pollutant in device's Input2 network",
	},
	{
		name: "RatioVolatilesInput2",
		description: "The ratio of volatiles in device's Input2 network",
	},
	{
		name: "RatioWaterInput2",
		description: "The ratio of water in device's Input2 network",
	},
	{
		name: "RatioNitrousOxideInput2",
		description: "The ratio of {GAS:NitrousOxide} in device's Input2 network",
	},
	{
		name: "TotalMolesInput2",
		description: "Returns the total moles of the device's Input2 Network",
	},
	{
		name: "CombustionInput2",
		description: "The assess atmosphere is on fire. Returns 1 if device's Input2 network is on fire, 0 if not.",
	},
	{
		name: "RequestHash",
		description: "When set to the unique identifier, requests an item of the provided type from the device",
	},
	{
		name: "CurrentResearchPodType",
		description: "logic.CurrentResearchPodType",
	},
	{
		name: "ManualResearchRequiredPod",
		description: "logic.ManualResearchRequiredPod",
	},
	{
		name: "Progress",
		description: "Progress of the rocket to the next node on the map expressed as a value between 0-1.",
	},
	{
		name: "DestinationCode",
		description: "Unique identifier code for a destination on the space map.",
	},
	{
		name: "Acceleration",
		description:
			"Change in velocity. Rockets that are deccelerating when landing will show this as negative value.",
	},
	{
		name: "AutoShutOff",
		description: "Turns off all devices in the rocket upon reaching destination",
	},
	{
		name: "Mass",
		description:
			"The total Mass of the rocket in kilograms including fuel and cargo. The more massive the rocket the more fuel will be required to move to a new location in space.",
	},
	{
		name: "DryMass",
		description:
			"The Mass in kilograms of the rocket excluding fuel. The more massive the rocket the more fuel will be required to move to a new location in space.",
	},
	{
		name: "Thrust",
		description: "Total current thrust of all rocket engines on the rocket in Newtons.",
	},
	{
		name: "Weight",
		description:
			"Weight of Rocket in Newtons (Including fuel and cargo). Weight is effected by local body gravity.",
	},
	{
		name: "ThrustToWeight",
		description:
			"Ratio of thrust to weight of rocket. Weight is effected by local body gravity. A rocket with a low thrust to weight will expend more fuel during launch and landing.",
	},
	{
		name: "TimeToDestination",
		description: "Estimated time in seconds until rocket arrives at target destination.",
	},
	{
		name: "BurnTimeRemaining",
		description: "Estimated time in seconds until fuel is depleted. Calculated based on current fuel usage.",
	},
	{
		name: "AutoLand",
		description:
			"Engages the automatic landing algorithm. The rocket will automatically throttle and turn on and off its engines to achieve a smooth landing.",
	},
	{
		name: "FlightControlRule",
		description: "logic.FlightControlRule",
	},
	{
		name: "ReEntryAltitude",
		description: "logic.ReEntryAltitude",
	},
	{
		name: "Apex",
		description: "logic.Apex",
	},
	{
		name: "Index",
		description: "logic.Index",
	},
	{
		name: "DrillCondition",
		description: "logic.DrillCondition",
	},
	{
		name: "Output",
		description:
			"The output operation for a sort handling device, such as a stacker or sorter, when in logic mode the device will only action one repetition when set zero or above and then back to -1 and await further instructions",
	},
	{
		name: "EnvironmentEfficiency",
		description: "The Environment Efficiency reported by the machine, as a float between 0 and 1",
	},
	{
		name: "WorkingGasEfficiency",
		description: "The Working Gas Efficiency reported by the machine, as a float between 0 and 1",
	},
	{
		name: "NextWeatherEventTime",
		description: "logic.NextWeatherEventTime",
	},
	// constants
	{ name: "nan", description: "nan = NaN" },
	{ name: "pinf", description: "pinf = Infinity" },
	{ name: "ninf", description: "ninf = -Infinity" },
	{ name: "pi", description: "pi = 3.141592653589793" },
	{ name: "deg2rad", description: "deg2rad = 0.01745329238474369" },
	{ name: "rad2deg", description: "rad2deg = 57.295780181884766" },
	{ name: "epsilon", description: "epsilon = 5e-324" },
	{ name: "Sound.None", description: "Sound.None = 0" },
	{ name: "Sound.Alarm2", description: "Sound.Alarm2 = 1" },
	{ name: "Sound.Alarm3", description: "Sound.Alarm3 = 2" },
	{ name: "Sound.Alarm4", description: "Sound.Alarm4 = 3" },
	{ name: "Sound.Alarm5", description: "Sound.Alarm5 = 4" },
	{ name: "Sound.Alarm6", description: "Sound.Alarm6 = 5" },
	{ name: "Sound.Alarm7", description: "Sound.Alarm7 = 6" },
	{ name: "Sound.Music1", description: "Sound.Music1 = 7" },
	{ name: "Sound.Music2", description: "Sound.Music2 = 8" },
	{ name: "Sound.Music3", description: "Sound.Music3 = 9" },
	{ name: "Sound.Alarm8", description: "Sound.Alarm8 = 10" },
	{ name: "Sound.Alarm9", description: "Sound.Alarm9 = 11" },
	{ name: "Sound.Alarm10", description: "Sound.Alarm10 = 12" },
	{ name: "Sound.Alarm11", description: "Sound.Alarm11 = 13" },
	{ name: "Sound.Alarm12", description: "Sound.Alarm12 = 14" },
	{ name: "Sound.Danger", description: "Sound.Danger = 15" },
	{ name: "Sound.Warning", description: "Sound.Warning = 16" },
	{ name: "Sound.Alert", description: "Sound.Alert = 17" },
	{ name: "Sound.StormIncoming", description: "Sound.StormIncoming = 18" },
	{ name: "Sound.IntruderAlert", description: "Sound.IntruderAlert = 19" },
	{ name: "Sound.Depressurising", description: "Sound.Depressurising = 20" },
	{ name: "Sound.Pressurising", description: "Sound.Pressurising = 21" },
	{ name: "Sound.AirlockCycling", description: "Sound.AirlockCycling = 22" },
	{ name: "Sound.PowerLow", description: "Sound.PowerLow = 23" },
	{ name: "Sound.SystemFailure", description: "Sound.SystemFailure = 24" },
	{ name: "Sound.Welcome", description: "Sound.Welcome = 25" },
	{ name: "Sound.MalfunctionDetected", description: "Sound.MalfunctionDetected = 26" },
	{ name: "Sound.HaltWhoGoesThere", description: "Sound.HaltWhoGoesThere = 27" },
	{ name: "Sound.FireFireFire", description: "Sound.FireFireFire = 28" },
	{ name: "Sound.One", description: "Sound.One = 29" },
	{ name: "Sound.Two", description: "Sound.Two = 30" },
	{ name: "Sound.Three", description: "Sound.Three = 31" },
	{ name: "Sound.Four", description: "Sound.Four = 32" },
	{ name: "Sound.Five", description: "Sound.Five = 33" },
	{ name: "Sound.Floor", description: "Sound.Floor = 34" },
	{ name: "Sound.RocketLaunching", description: "Sound.RocketLaunching = 35" },
	{ name: "Sound.LiftOff", description: "Sound.LiftOff = 36" },
	{ name: "Sound.TraderIncoming", description: "Sound.TraderIncoming = 37" },
	{ name: "Sound.TraderLanded", description: "Sound.TraderLanded = 38" },
	{ name: "Sound.PressureHigh", description: "Sound.PressureHigh = 39" },
	{ name: "Sound.PressureLow", description: "Sound.PressureLow = 40" },
	{ name: "Sound.TemperatureHigh", description: "Sound.TemperatureHigh = 41" },
	{ name: "Sound.TemperatureLow", description: "Sound.TemperatureLow = 42" },
	{ name: "Sound.PollutantsDetected", description: "Sound.PollutantsDetected = 43" },
	{ name: "Sound.HighCarbonDioxide", description: "Sound.HighCarbonDioxide = 44" },
	{ name: "Sound.Alarm1", description: "Sound.Alarm1 = 45" },
	{ name: "TransmitterMode.Passive", description: "TransmitterMode.Passive = 0" },
	{ name: "TransmitterMode.Active", description: "TransmitterMode.Active = 1" },
	{ name: "ElevatorMode.Stationary", description: "ElevatorMode.Stationary = 0" },
	{ name: "ElevatorMode.Upward", description: "ElevatorMode.Upward = 1" },
	{ name: "ElevatorMode.Downward", description: "ElevatorMode.Downward = 2" },
	{ name: "Color.Blue", description: "Color.Blue = 0" },
	{ name: "Color.Gray", description: "Color.Gray = 1" },
	{ name: "Color.Green", description: "Color.Green = 2" },
	{ name: "Color.Orange", description: "Color.Orange = 3" },
	{ name: "Color.Red", description: "Color.Red = 4" },
	{ name: "Color.Yellow", description: "Color.Yellow = 5" },
	{ name: "Color.White", description: "Color.White = 6" },
	{ name: "Color.Black", description: "Color.Black = 7" },
	{ name: "Color.Brown", description: "Color.Brown = 8" },
	{ name: "Color.Khaki", description: "Color.Khaki = 9" },
	{ name: "Color.Pink", description: "Color.Pink = 10" },
	{ name: "Color.Purple", description: "Color.Purple = 11" },
	{ name: "EntityState.Alive", description: "EntityState.Alive = 0" },
	{ name: "EntityState.Dead", description: "EntityState.Dead = 1" },
	{ name: "EntityState.Unconscious", description: "EntityState.Unconscious = 2" },
	{ name: "EntityState.Decay", description: "EntityState.Decay = 3" },
	{ name: "AirControl.None", description: "AirControl.None = 0" },
	{ name: "AirControl.Offline", description: "AirControl.Offline = 1" },
	{ name: "AirControl.Pressure", description: "AirControl.Pressure = 2" },
	{ name: "AirControl.Draught", description: "AirControl.Draught = 4" },
	{ name: "DaylightSensorMode.Default", description: "DaylightSensorMode.Default = 0" },
	{ name: "DaylightSensorMode.Horizontal", description: "DaylightSensorMode.Horizontal = 1" },
	{ name: "DaylightSensorMode.Vertical", description: "DaylightSensorMode.Vertical = 2" },
	{ name: "AirCon.Cold", description: "AirCon.Cold = 0" },
	{ name: "AirCon.Hot", description: "AirCon.Hot = 1" },
	{ name: "Vent.Outward", description: "Vent.Outward = 0" },
	{ name: "Vent.Inward", description: "Vent.Inward = 1" },
	{ name: "PowerMode.Idle", description: "PowerMode.Idle = 0" },
	{ name: "PowerMode.Discharged", description: "PowerMode.Discharged = 1" },
	{ name: "PowerMode.Discharging", description: "PowerMode.Discharging = 2" },
	{ name: "PowerMode.Charging", description: "PowerMode.Charging = 3" },
	{ name: "PowerMode.Charged", description: "PowerMode.Charged = 4" },
	{ name: "RobotMode.None", description: "RobotMode.None = 0" },
	{ name: "RobotMode.Follow", description: "RobotMode.Follow = 1" },
	{ name: "RobotMode.MoveToTarget", description: "RobotMode.MoveToTarget = 2" },
	{ name: "RobotMode.Roam", description: "RobotMode.Roam = 3" },
	{ name: "RobotMode.Unload", description: "RobotMode.Unload = 4" },
	{ name: "RobotMode.PathToTarget", description: "RobotMode.PathToTarget = 5" },
	{ name: "RobotMode.StorageFull", description: "RobotMode.StorageFull = 6" },
	{ name: "SortingClass.Default", description: "SortingClass.Default = 0" },
	{ name: "SortingClass.Kits", description: "SortingClass.Kits = 1" },
	{ name: "SortingClass.Tools", description: "SortingClass.Tools = 2" },
	{ name: "SortingClass.Resources", description: "SortingClass.Resources = 3" },
	{ name: "SortingClass.Food", description: "SortingClass.Food = 4" },
	{ name: "SortingClass.Clothing", description: "SortingClass.Clothing = 5" },
	{ name: "SortingClass.Appliances", description: "SortingClass.Appliances = 6" },
	{ name: "SortingClass.Atmospherics", description: "SortingClass.Atmospherics = 7" },
	{ name: "SortingClass.Storage", description: "SortingClass.Storage = 8" },
	{ name: "SortingClass.Ores", description: "SortingClass.Ores = 9" },
	{ name: "SortingClass.Ices", description: "SortingClass.Ices = 10" },
	{ name: "SlotClass.None", description: "SlotClass.None = 0" },
	{ name: "SlotClass.Helmet", description: "SlotClass.Helmet = 1" },
	{ name: "SlotClass.Suit", description: "SlotClass.Suit = 2" },
	{ name: "SlotClass.Back", description: "SlotClass.Back = 3" },
	{ name: "SlotClass.GasFilter", description: "SlotClass.GasFilter = 4" },
	{ name: "SlotClass.GasCanister", description: "SlotClass.GasCanister = 5" },
	{ name: "SlotClass.Motherboard", description: "SlotClass.Motherboard = 6" },
	{ name: "SlotClass.Circuitboard", description: "SlotClass.Circuitboard = 7" },
	{ name: "SlotClass.DataDisk", description: "SlotClass.DataDisk = 8" },
	{ name: "SlotClass.Organ", description: "SlotClass.Organ = 9" },
	{ name: "SlotClass.Ore", description: "SlotClass.Ore = 10" },
	{ name: "SlotClass.Plant", description: "SlotClass.Plant = 11" },
	{ name: "SlotClass.Uniform", description: "SlotClass.Uniform = 12" },
	{ name: "SlotClass.Entity", description: "SlotClass.Entity = 13" },
	{ name: "SlotClass.Battery", description: "SlotClass.Battery = 14" },
	{ name: "SlotClass.Egg", description: "SlotClass.Egg = 15" },
	{ name: "SlotClass.Belt", description: "SlotClass.Belt = 16" },
	{ name: "SlotClass.Tool", description: "SlotClass.Tool = 17" },
	{ name: "SlotClass.Appliance", description: "SlotClass.Appliance = 18" },
	{ name: "SlotClass.Ingot", description: "SlotClass.Ingot = 19" },
	{ name: "SlotClass.Torpedo", description: "SlotClass.Torpedo = 20" },
	{ name: "SlotClass.Cartridge", description: "SlotClass.Cartridge = 21" },
	{ name: "SlotClass.AccessCard", description: "SlotClass.AccessCard = 22" },
	{ name: "SlotClass.Magazine", description: "SlotClass.Magazine = 23" },
	{ name: "SlotClass.Circuit", description: "SlotClass.Circuit = 24" },
	{ name: "SlotClass.Bottle", description: "SlotClass.Bottle = 25" },
	{ name: "SlotClass.ProgrammableChip", description: "SlotClass.ProgrammableChip = 26" },
	{ name: "SlotClass.Glasses", description: "SlotClass.Glasses = 27" },
	{ name: "SlotClass.CreditCard", description: "SlotClass.CreditCard = 28" },
	{ name: "SlotClass.DirtCanister", description: "SlotClass.DirtCanister = 29" },
	{ name: "SlotClass.SensorProcessingUnit", description: "SlotClass.SensorProcessingUnit = 30" },
	{ name: "SlotClass.LiquidCanister", description: "SlotClass.LiquidCanister = 31" },
	{ name: "SlotClass.LiquidBottle", description: "SlotClass.LiquidBottle = 32" },
	{ name: "SlotClass.Wreckage", description: "SlotClass.Wreckage = 33" },
	{ name: "SlotClass.SoundCartridge", description: "SlotClass.SoundCartridge = 34" },
	{ name: "SlotClass.DrillHead", description: "SlotClass.DrillHead = 35" },
	{ name: "SlotClass.ScanningHead", description: "SlotClass.ScanningHead = 36" },
	{ name: "SlotClass.Flare", description: "SlotClass.Flare = 37" },
	{ name: "SlotClass.Blocked", description: "SlotClass.Blocked = 38" },
	{ name: "SlotClass.SuitMod", description: "SlotClass.SuitMod = 39" },
	{ name: "GasType.Undefined", description: "GasType.Undefined = 0" },
	{ name: "GasType.Oxygen", description: "GasType.Oxygen = 1" },
	{ name: "GasType.Nitrogen", description: "GasType.Nitrogen = 2" },
	{ name: "GasType.CarbonDioxide", description: "GasType.CarbonDioxide = 4" },
	{ name: "GasType.Volatiles", description: "GasType.Volatiles = 8" },
	{ name: "GasType.Pollutant", description: "GasType.Pollutant = 16" },
	{ name: "GasType.Water", description: "GasType.Water = 32" },
	{ name: "GasType.NitrousOxide", description: "GasType.NitrousOxide = 64" },
	{ name: "GasType.LiquidNitrogen", description: "GasType.LiquidNitrogen = 128" },
	{ name: "GasType.LiquidOxygen", description: "GasType.LiquidOxygen = 256" },
	{ name: "GasType.LiquidVolatiles", description: "GasType.LiquidVolatiles = 512" },
	{ name: "GasType.Steam", description: "GasType.Steam = 1024" },
	{ name: "GasType.LiquidCarbonDioxide", description: "GasType.LiquidCarbonDioxide = 2048" },
	{ name: "GasType.LiquidPollutant", description: "GasType.LiquidPollutant = 4096" },
	{ name: "GasType.LiquidNitrousOxide", description: "GasType.LiquidNitrousOxide = 8192" },
	{ name: "GasType.Hydrogen", description: "GasType.Hydrogen = 16384" },
	{ name: "GasType.LiquidHydrogen", description: "GasType.LiquidHydrogen = 32768" },
	{ name: "GasType.PollutedWater", description: "GasType.PollutedWater = 65536" },
	{ name: "GasType.Invalid", description: "GasType.Invalid = 0" },
	{ name: "GasType.None", description: "GasType.None = 1" },
	{ name: "GasType.Mine", description: "GasType.Mine = 2" },
	{ name: "GasType.Survey", description: "GasType.Survey = 3" },
	{ name: "GasType.Discover", description: "GasType.Discover = 4" },
	{ name: "GasType.Chart", description: "GasType.Chart = 5" },
	{ name: "ReEntryProfile.None", description: "ReEntryProfile.None = 0" },
	{ name: "ReEntryProfile.Optimal", description: "ReEntryProfile.Optimal = 1" },
	{ name: "ReEntryProfile.Medium", description: "ReEntryProfile.Medium = 2" },
	{ name: "ReEntryProfile.High", description: "ReEntryProfile.High = 3" },
	{ name: "ReEntryProfile.Max", description: "ReEntryProfile.Max = 4" },
	{ name: "SorterInstruction.None", description: "SorterInstruction.None = 0" },
	{ name: "SorterInstruction.FilterPrefabHashEquals", description: "SorterInstruction.FilterPrefabHashEquals = 1" },
	{
		name: "SorterInstruction.FilterPrefabHashNotEquals",
		description: "SorterInstruction.FilterPrefabHashNotEquals = 2",
	},
	{
		name: "SorterInstruction.FilterSortingClassCompare",
		description: "SorterInstruction.FilterSortingClassCompare = 3",
	},
	{ name: "SorterInstruction.FilterSlotTypeCompare", description: "SorterInstruction.FilterSlotTypeCompare = 4" },
	{ name: "SorterInstruction.FilterQuantityCompare", description: "SorterInstruction.FilterQuantityCompare = 5" },
	{
		name: "SorterInstruction.LimitNextExecutionByCount",
		description: "SorterInstruction.LimitNextExecutionByCount = 6",
	},
]
export default allLogic
