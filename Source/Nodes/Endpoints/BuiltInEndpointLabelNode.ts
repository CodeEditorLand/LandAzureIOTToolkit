// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.

import * as vscode from "vscode";
import type { INode } from "../INode";
import { BuiltInEndpointItemNode } from "./BuiltInEndpointItemNode";

export class BuiltInEndpointLabelNode implements INode {
	public getTreeItem(): vscode.TreeItem {
		return {
			label: "Built-in endpoints",
			collapsibleState: vscode.TreeItemCollapsibleState.Collapsed,
			contextValue: "built-in-endpoint-label",
		};
	}

	public getChildren(): INode[] {
		return [new BuiltInEndpointItemNode()];
	}
}
