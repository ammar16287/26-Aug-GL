namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: EmpoOnboardingAutomationOldSchema

	/// <exclude/>
	public class EmpoOnboardingAutomationOldSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public EmpoOnboardingAutomationOldSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public EmpoOnboardingAutomationOldSchema(EmpoOnboardingAutomationOldSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("88c5663c-9049-4550-bb7a-cefd6260fd81");
			Name = "EmpoOnboardingAutomationOld";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("1f95619a-0339-420a-b70a-55339370dbfb");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,211,215,87,240,205,47,75,77,81,40,201,87,40,72,76,206,78,76,79,85,112,46,45,46,201,207,85,208,112,205,45,200,247,207,75,202,79,44,74,201,204,75,119,44,5,10,38,150,100,230,231,105,114,1,0,202,135,69,149,54,0,0,0 };
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("88c5663c-9049-4550-bb7a-cefd6260fd81"));
		}

		#endregion

	}

	#endregion

}

